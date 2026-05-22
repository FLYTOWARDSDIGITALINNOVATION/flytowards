const mongoose = require('mongoose');
const uri = 'mongodb+srv://lathavairamuthu1004_db_user:flytowards@cluster0.povenne.mongodb.net/?appName=Cluster0';

console.log("Testing EXACT original connection string...");
mongoose.connect(uri)
    .then(() => {
        console.log("✅ SUCCESS!");
        process.exit(0);
    })
    .catch(err => {
        console.error("❌ FAILED:", err.message);
        process.exit(1);
    });
