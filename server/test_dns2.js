const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
const mongoose = require('mongoose');

const uri = 'mongodb://lathavairamuthu1004_db_user:flytowards@ac-abu1tvd-shard-00-00.povenne.mongodb.net:27017,ac-abu1tvd-shard-00-01.povenne.mongodb.net:27017,ac-abu1tvd-shard-00-02.povenne.mongodb.net:27017/flytowardsBlog?ssl=true&replicaSet=atlas-abu1tvd-shard-0&authSource=admin&retryWrites=true&w=majority';

console.log("Testing DIRECT connection with IPv4 first...");
mongoose.connect(uri)
    .then(() => {
        console.log("✅ SUCCESS!");
        process.exit(0);
    })
    .catch(err => {
        console.error("❌ FAILED:", err.message);
        process.exit(1);
    });
