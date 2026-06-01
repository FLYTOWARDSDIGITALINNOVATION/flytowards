const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
const mongoose = require('mongoose');

const uri = 'mongodb+srv://lathavairamuthu1004_db_user:flytowards@cluster0.povenne.mongodb.net/flytowardsBlog?retryWrites=true&w=majority';

console.log("Testing connection with IPv4 first...");
mongoose.connect(uri)
    .then(() => {
        console.log("✅ SUCCESS!");
        process.exit(0);
    })
    .catch(err => {
        console.error("❌ FAILED:", err.message);
        process.exit(1);
    });
