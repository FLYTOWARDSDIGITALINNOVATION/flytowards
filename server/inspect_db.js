const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

[
    path.join(__dirname, '.env'),
    path.join(__dirname, '..', '.env')
].forEach((envPath) => {
    if (fs.existsSync(envPath)) {
        require('dotenv').config({ path: envPath, quiet: true });
    }
});

const MONGODB_URI = process.env.MONGODB_URI;

const run = async () => {
    await mongoose.connect(MONGODB_URI);
    const blogSchema = new mongoose.Schema({
        title: String,
        imageAlign: String,
        coverImage: String
    });
    const Blog = mongoose.model('Blog', blogSchema);
    const blogs = await Blog.find();
    console.log(JSON.stringify(blogs, null, 2));
    await mongoose.disconnect();
};

run();
