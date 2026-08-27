const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const dns = require('dns');
<<<<<<< HEAD

// Force using Google DNS to solve local Windows querySrv DNS resolution errors
dns.setServers(['8.8.8.8', '8.8.4.4']);

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
// Serve uploaded images publicly
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection with bypassed TLS certificate check (for system clock mismatches)
mongoose.connect(process.env.MONGODB_URI, { 
    family: 4,
    tlsAllowInvalidCertificates: true 
})
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('MongoDB connection error. Check your password in .env!', err));
=======
const fs = require('fs');
const { randomUUID } = require('crypto');

// Force using Google DNS to reduce local Windows querySrv resolution issues.
dns.setServers(['8.8.8.8', '8.8.4.4']);

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
    .map((origin) => origin.trim())
    .filter(Boolean);

// Middleware
app.use(cors(CORS_ORIGINS.length ? { origin: CORS_ORIGINS } : {}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve uploaded images publicly
const uploadsDir = path.join(__dirname, 'uploads');
fs.mkdirSync(uploadsDir, { recursive: true });
app.use('/uploads', express.static(uploadsDir));

// File-based fallback store for blogs
const dataDir = path.join(__dirname, 'data');
const localBlogStorePath = path.join(dataDir, 'blogs.json');
fs.mkdirSync(dataDir, { recursive: true });

let blogStorageMode = 'file';

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB successfully!');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB disconnected.');
    if (blogStorageMode === 'mongo') {
        blogStorageMode = 'file';
        console.warn('Falling back to local JSON storage.');
    }
});

const isMongoUriConfigured = () =>
    Boolean(MONGODB_URI) && !/^your_mongodb_connection_string_here$/i.test(MONGODB_URI);

const getDatabaseState = () => {
    switch (mongoose.connection.readyState) {
        case 0:
            return 'disconnected';
        case 1:
            return 'connected';
        case 2:
            return 'connecting';
        case 3:
            return 'disconnecting';
        default:
            return 'unknown';
    }
};

const isMongoStorageActive = () =>
    blogStorageMode === 'mongo' && mongoose.connection.readyState === 1;

const readLocalBlogs = () => {
    try {
        if (!fs.existsSync(localBlogStorePath)) {
            return [];
        }

        const raw = fs.readFileSync(localBlogStorePath, 'utf8');
        if (!raw.trim()) {
            return [];
        }

        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.warn('Failed to read local blog store:', error.message);
        return [];
    }
};

const writeLocalBlogs = (blogs) => {
    fs.writeFileSync(localBlogStorePath, JSON.stringify(blogs, null, 2), 'utf8');
};

const sortBlogsNewestFirst = (blogs) =>
    [...blogs].sort((a, b) => {
        const aTime = new Date(a?.createdAt || 0).getTime();
        const bTime = new Date(b?.createdAt || 0).getTime();
        return bTime - aTime;
    });

const buildLocalBlog = ({ title, content, coverImage }) => ({
    _id: randomUUID(),
    title,
    content,
    coverImage,
    createdAt: new Date().toISOString()
});

const saveBlogLocally = ({ title, content, coverImage }) => {
    const blog = buildLocalBlog({ title, content, coverImage });
    const localBlogs = readLocalBlogs();
    localBlogs.unshift(blog);
    writeLocalBlogs(localBlogs);
    return blog;
};

const deleteBlogLocally = (id) => {
    const localBlogs = readLocalBlogs();
    const nextBlogs = localBlogs.filter((blog) => blog._id !== id);

    if (nextBlogs.length === localBlogs.length) {
        return null;
    }

    const deletedBlog = localBlogs.find((blog) => blog._id === id) || null;
    writeLocalBlogs(nextBlogs);
    return deletedBlog;
};

const updateBlogLocally = (id, { title, content, coverImage }) => {
    const localBlogs = readLocalBlogs();
    const index = localBlogs.findIndex((blog) => blog._id === id);

    if (index === -1) {
        return null;
    }

    const updatedBlog = {
        ...localBlogs[index],
        title: title || localBlogs[index].title,
        content: content || localBlogs[index].content,
        coverImage: coverImage !== undefined ? coverImage : localBlogs[index].coverImage,
        updatedAt: new Date().toISOString()
    };

    localBlogs[index] = updatedBlog;
    writeLocalBlogs(localBlogs);
    return updatedBlog;
};

const getBlogsFromStorage = async () => {
    if (isMongoStorageActive()) {
        try {
            const blogs = await Blog.find().sort({ createdAt: -1 });
            return { storage: 'mongo', blogs };
        } catch (error) {
            console.warn('MongoDB fetch failed, switching to local JSON storage:', error.message);
            blogStorageMode = 'file';
        }
    }

    return { storage: 'file', blogs: sortBlogsNewestFirst(readLocalBlogs()) };
};

const createBlogInStorage = async ({ title, content, coverImage }) => {
    if (isMongoStorageActive()) {
        try {
            const newBlog = new Blog({
                title,
                content,
                coverImage
            });

            await newBlog.save();
            return { storage: 'mongo', blog: newBlog };
        } catch (error) {
            console.warn('MongoDB save failed, switching to local JSON storage:', error.message);
            blogStorageMode = 'file';
        }
    }

    const blog = saveBlogLocally({ title, content, coverImage });
    return { storage: 'file', blog };
};

const updateBlogInStorage = async (id, { title, content, coverImage }) => {
    if (isMongoStorageActive()) {
        try {
            const updatedBlog = await Blog.findByIdAndUpdate(
                id,
                { title, content, coverImage },
                { new: true }
            );
            if (updatedBlog) {
                return { storage: 'mongo', blog: updatedBlog };
            }
            return null;
        } catch (error) {
            console.warn('MongoDB update failed, switching to local JSON storage:', error.message);
            blogStorageMode = 'file';
        }
    }

    const updatedBlog = updateBlogLocally(id, { title, content, coverImage });
    return updatedBlog ? { storage: 'file', blog: updatedBlog } : null;
};

const deleteBlogFromStorage = async (id) => {
    if (isMongoStorageActive()) {
        try {
            const deletedBlog = await Blog.findByIdAndDelete(id);
            if (deletedBlog) {
                return { storage: 'mongo', blog: deletedBlog };
            }
            return null;
        } catch (error) {
            console.warn('MongoDB delete failed, switching to local JSON storage:', error.message);
            blogStorageMode = 'file';
        }
    }

    const deletedBlog = deleteBlogLocally(id);
    return deletedBlog ? { storage: 'file', blog: deletedBlog } : null;
};
>>>>>>> origin/main

// Define Blog Schema and Model
const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
<<<<<<< HEAD
    coverImage: { type: String }, // Store the path to the image
    createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);

// Configure Multer for Image Uploads (saves files to server/uploads directory)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Make sure this folder exists!
=======
    coverImage: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

// Configure Multer for Image Uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir);
>>>>>>> origin/main
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

<<<<<<< HEAD
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'flytowardsdigitalinnovation@gmail.com';

const createMailTransporter = () => {
    let nodemailer;
    try {
        nodemailer = require('nodemailer');
    } catch (_) {
        return null;
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 0);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !port || !user || !pass) return null;

    const secure = String(process.env.SMTP_SECURE || (port === 465)).toLowerCase() === 'true';
    return nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass }
    });
=======
const connectMongo = async () => {
    if (!isMongoUriConfigured()) {
        console.warn('MONGODB_URI is not configured. Using local JSON storage.');
        blogStorageMode = 'file';
        return false;
    }

    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI, {
            family: 4,
            tlsAllowInvalidCertificates: true,
            serverSelectionTimeoutMS: 5000
        });
        blogStorageMode = 'mongo';
        return true;
    } catch (err) {
        blogStorageMode = 'file';
        console.warn('MongoDB unavailable, using local JSON storage.', err.message);
        return false;
    }
>>>>>>> origin/main
};

// --- API Routes ---

<<<<<<< HEAD
// 1. Create a new blog post
app.post('/api/blogs', upload.single('coverImage'), async (req, res) => {
    try {
        const { title, content } = req.body;
        
        let coverImagePath = '';
        if (req.file) {
            coverImagePath = `/uploads/${req.file.filename}`;
        }

        const newBlog = new Blog({
=======
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        database: getDatabaseState(),
        storage: isMongoStorageActive() ? 'mongo' : 'file'
    });
});

// 1. Create a new blog post
app.post('/api/blogs', upload.single('coverImage'), async (req, res) => {
    try {
        const title = typeof req.body.title === 'string' ? req.body.title.trim() : '';
        const content = typeof req.body.content === 'string' ? req.body.content.trim() : '';

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required.' });
        }

        const coverImagePath = req.file ? `/uploads/${req.file.filename}` : '';
        const { blog, storage: storageMode } = await createBlogInStorage({
>>>>>>> origin/main
            title,
            content,
            coverImage: coverImagePath
        });

<<<<<<< HEAD
        await newBlog.save(); // Saves to MongoDB Atlas!
        res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
    } catch (error) {
        console.error(error);
=======
        return res.status(201).json({
            message: 'Blog created successfully',
            blog,
            storage: storageMode
        });
    } catch (error) {
        console.error('Failed to create blog:', error);
>>>>>>> origin/main
        res.status(500).json({ error: 'Failed to create blog' });
    }
});

// 2. Get all blogs (for displaying on the frontend)
app.get('/api/blogs', async (req, res) => {
    try {
<<<<<<< HEAD
        const blogs = await Blog.find().sort({ createdAt: -1 }); // Newest first
        res.status(200).json(blogs);
    } catch (error) {
=======
        const { blogs } = await getBlogsFromStorage();
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Failed to fetch blogs:', error);
>>>>>>> origin/main
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});

// 3. Delete a blog post by ID
app.delete('/api/blogs/:id', async (req, res) => {
    try {
        const { id } = req.params;
<<<<<<< HEAD
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully', blog: deletedBlog });
    } catch (error) {
        console.error(error);
=======
        const deleted = await deleteBlogFromStorage(id);

        if (!deleted) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        return res.status(200).json({
            message: 'Blog deleted successfully',
            blog: deleted.blog,
            storage: deleted.storage
        });
    } catch (error) {
        console.error('Failed to delete blog:', error);
>>>>>>> origin/main
        res.status(500).json({ error: 'Failed to delete blog' });
    }
});

<<<<<<< HEAD
// 4. Contact form -> send email
app.post('/api/contact', async (req, res) => {
    try {
        const { firstName, lastName, email, subject, message } = req.body || {};

        const safeFirstName = String(firstName || '').trim();
        const safeLastName = String(lastName || '').trim();
        const safeEmail = String(email || '').trim();
        const safeSubject = String(subject || '').trim();
        const safeMessage = String(message || '').trim();

        if (!safeFirstName || !safeEmail || !safeSubject || !safeMessage) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const transporter = createMailTransporter();
        if (!transporter) {
            return res.status(500).json({
                error: 'Email service not configured on server',
                hint: 'Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in server environment'
            });
        }

        const nameLine = [safeFirstName, safeLastName].filter(Boolean).join(' ');
        const text = [
            `New contact form submission:`,
            ``,
            `Name: ${nameLine || '-'}`,
            `Email: ${safeEmail}`,
            `Subject: ${safeSubject}`,
            ``,
            `Message:`,
            safeMessage
        ].join('\n');

        await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: CONTACT_TO_EMAIL,
            replyTo: safeEmail,
            subject: `Contact Form: ${safeSubject}`,
            text
        });

        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error('Contact email failed:', error);
        return res.status(500).json({ error: 'Failed to send message' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
=======
// 4. Update a blog post by ID
app.patch('/api/blogs/:id', upload.single('coverImage'), async (req, res) => {
    try {
        const { id } = req.params;
        const title = typeof req.body.title === 'string' ? req.body.title.trim() : '';
        const content = typeof req.body.content === 'string' ? req.body.content.trim() : '';

        const updateData = {};
        if (title) updateData.title = title;
        if (content) updateData.content = content;
        if (req.file) {
            updateData.coverImage = `/uploads/${req.file.filename}`;
        }

        const updated = await updateBlogInStorage(id, updateData);

        if (!updated) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        return res.status(200).json({
            message: 'Blog updated successfully',
            blog: updated.blog,
            storage: updated.storage
        });
    } catch (error) {
        console.error('Failed to update blog:', error);
        res.status(500).json({ error: 'Failed to update blog' });
    }
});

const startServer = async () => {
    await connectMongo();

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};

startServer().catch((error) => {
    console.error('Failed to start server:', error);
    process.exitCode = 1;
>>>>>>> origin/main
});
