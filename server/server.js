const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const dns = require('dns');

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

// Define Blog Schema and Model
const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String }, // Store the path to the image
    createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);

// Configure Multer for Image Uploads (saves files to server/uploads directory)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Make sure this folder exists!
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// --- API Routes ---

// 1. Create a new blog post
app.post('/api/blogs', upload.single('coverImage'), async (req, res) => {
    try {
        const { title, content } = req.body;
        
        let coverImagePath = '';
        if (req.file) {
            coverImagePath = `/uploads/${req.file.filename}`;
        }

        const newBlog = new Blog({
            title,
            content,
            coverImage: coverImagePath
        });

        await newBlog.save(); // Saves to MongoDB Atlas!
        res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create blog' });
    }
});

// 2. Get all blogs (for displaying on the frontend)
app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 }); // Newest first
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
