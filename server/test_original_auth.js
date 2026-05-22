const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongoose = require('mongoose');
// Testing with original password (Lathacs@10 encoded as Lathacs%4010)
const uri = 'mongodb+srv://lathavairamuthu1004_db_user:Lathacs%4010@cluster0.povenne.mongodb.net/flytowardsBlog?retryWrites=true&w=majority';

console.log("Testing connection forcing Google DNS AND using original Lathacs@10 password...");
mongoose.connect(uri)
    .then(() => {
        console.log("✅ SUCCESS! Connected to MongoDB Atlas!");
        process.exit(0);
    })
    .catch(err => {
        console.error("❌ FAILED:", err.message);
        process.exit(1);
    });
