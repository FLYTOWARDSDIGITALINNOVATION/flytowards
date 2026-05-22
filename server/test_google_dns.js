const dns = require('dns');
// Force Node.js to use Google's public DNS servers to resolve the SRV record
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongoose = require('mongoose');
const uri = 'mongodb+srv://lathavairamuthu1004_db_user:flytowards@cluster0.povenne.mongodb.net/flytowardsBlog?retryWrites=true&w=majority';

console.log("Testing connection forcing Google DNS (8.8.8.8)...");
mongoose.connect(uri)
    .then(() => {
        console.log("✅ SUCCESS! Connected to MongoDB Atlas!");
        process.exit(0);
    })
    .catch(err => {
        console.error("❌ FAILED:", err.message);
        process.exit(1);
    });
