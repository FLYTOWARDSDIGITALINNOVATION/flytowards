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
};

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

// 3. Delete a blog post by ID
app.delete('/api/blogs/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully', blog: deletedBlog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete blog' });
    }
});

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
});
