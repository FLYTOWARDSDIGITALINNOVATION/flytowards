const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const dns = require('dns');
const fs = require('fs');

// Force Google DNS to avoid Windows DNS resolution issues with MongoDB Atlas SRV records
dns.setServers(['8.8.8.8', '8.8.4.4']);

// Load .env from server/ or project root
[
    path.join(__dirname, '.env'),
    path.join(__dirname, '..', '.env')
].forEach((envPath) => {
    if (fs.existsSync(envPath)) {
        require('dotenv').config({ path: envPath, quiet: true });
    }
});

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const MONGODB_URI = typeof process.env.MONGODB_URI === 'string' ? process.env.MONGODB_URI.trim() : '';
const CORS_ORIGINS = (process.env.CORS_ORIGIN || '')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cors(CORS_ORIGINS.length ? { origin: CORS_ORIGINS } : {}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve uploaded images (cover photos saved to disk)
const uploadsDir = path.join(__dirname, 'uploads');
fs.mkdirSync(uploadsDir, { recursive: true });
app.use('/uploads', express.static(uploadsDir));

// ── MongoDB connection events ────────────────────────────────────────────────
mongoose.connection.on('connected', () => {
    console.log('✅ Connected to MongoDB successfully!');
});

mongoose.connection.on('error', (err) => {
    console.error('❌ MongoDB connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
    console.warn('⚠️  MongoDB disconnected.');
});

const isMongoReady = () => mongoose.connection.readyState === 1;

// ── Blog Schema & Model ──────────────────────────────────────────────────────
const blogSchema = new mongoose.Schema({
    title:      { type: String, required: true },
    content:    { type: String, required: true },
    coverImage: { type: String, default: '' },
    imageAlign: { type: String, enum: ['left', 'center', 'right'], default: 'left' },
    createdAt:  { type: Date, default: Date.now },
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

// ── Multer – image upload to disk ───────────────────────────────────────────
const storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadsDir),
    filename:    (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// ── Helper: require MongoDB to be connected ──────────────────────────────────
const requireMongo = (req, res, next) => {
    if (!isMongoReady()) {
        return res.status(503).json({
            error: 'Database unavailable. Please check the MongoDB connection and try again.',
        });
    }
    next();
};

// ── API Routes ───────────────────────────────────────────────────────────────

// Health check
app.get('/api/health', (req, res) => {
    const states = { 0: 'disconnected', 1: 'connected', 2: 'connecting', 3: 'disconnecting' };
    res.status(200).json({
        status: 'ok',
        database: states[mongoose.connection.readyState] || 'unknown',
        storage: isMongoReady() ? 'mongo' : 'unavailable',
    });
});

// 1. Create a new blog post  (MongoDB only)
app.post('/api/blogs', requireMongo, upload.single('coverImage'), async (req, res) => {
    try {
        const title   = typeof req.body.title   === 'string' ? req.body.title.trim()   : '';
        const content = typeof req.body.content === 'string' ? req.body.content.trim() : '';
        const imageAlign = ['left', 'center', 'right'].includes(req.body.imageAlign) ? req.body.imageAlign : 'left';

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required.' });
        }

        const coverImage = req.file ? `/uploads/${req.file.filename}` : '';

        const blog = new Blog({ title, content, coverImage, imageAlign });
        await blog.save();

        return res.status(201).json({
            message: 'Blog created successfully',
            blog,
            storage: 'mongo',
        });
    } catch (error) {
        console.error('Failed to create blog:', error);
        res.status(500).json({ error: 'Failed to create blog. Please try again.' });
    }
});

// 2. Get all blogs  (MongoDB only)
app.get('/api/blogs', requireMongo, async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Failed to fetch blogs:', error);
        res.status(500).json({ error: 'Failed to fetch blogs.' });
    }
});

// 3. Delete a blog post by ID  (MongoDB only)
app.delete('/api/blogs/:id', requireMongo, async (req, res) => {
    try {
        const deleted = await Blog.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: 'Blog not found.' });
        }

        return res.status(200).json({
            message: 'Blog deleted successfully',
            blog: deleted,
            storage: 'mongo',
        });
    } catch (error) {
        console.error('Failed to delete blog:', error);
        res.status(500).json({ error: 'Failed to delete blog.' });
    }
});

// 4. Update a blog post by ID  (MongoDB only)
app.patch('/api/blogs/:id', requireMongo, upload.single('coverImage'), async (req, res) => {
    try {
        const title   = typeof req.body.title   === 'string' ? req.body.title.trim()   : '';
        const content = typeof req.body.content === 'string' ? req.body.content.trim() : '';
        const imageAlign = req.body.imageAlign;

        const updateData = {};
        if (title)   updateData.title   = title;
        if (content) updateData.content = content;
        if (req.file) updateData.coverImage = `/uploads/${req.file.filename}`;
        if (['left', 'center', 'right'].includes(imageAlign)) {
            updateData.imageAlign = imageAlign;
        }

        const updated = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!updated) {
            return res.status(404).json({ error: 'Blog not found.' });
        }

        return res.status(200).json({
            message: 'Blog updated successfully',
            blog: updated,
            storage: 'mongo',
        });
    } catch (error) {
        console.error('Failed to update blog:', error);
        res.status(500).json({ error: 'Failed to update blog.' });
    }
});

// ── Connect to MongoDB and start server ──────────────────────────────────────
const startServer = async () => {
    if (!MONGODB_URI || /^your_mongodb_connection_string_here$/i.test(MONGODB_URI)) {
        console.error('❌ MONGODB_URI is not configured in .env — server will start but all API calls will return 503.');
    } else {
        try {
            console.log('🔌 Connecting to MongoDB...');
            await mongoose.connect(MONGODB_URI, {
                family: 4,
                tlsAllowInvalidCertificates: true,
                serverSelectionTimeoutMS: 8000,
            });
            
            // Migration: Set imageAlign to 'center' for all posts except the nature post ('cx m m')
            // so they don't default to horizontal style.
            await Blog.updateMany(
                { title: { $ne: "cx m m" } },
                { $set: { imageAlign: "center" } }
            );
            console.log("🛠️  Database alignment layout migration completed.");
        } catch (err) {
            console.error('❌ Could not connect to MongoDB:', err.message);
            console.error('   All blog API calls will return 503 until the database is reachable.');
        }
    }

    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
};

startServer().catch((error) => {
    console.error('Failed to start server:', error);
    process.exitCode = 1;
});
