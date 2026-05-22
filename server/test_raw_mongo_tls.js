const { MongoClient } = require('mongodb');
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

// Bypass SSL certificate validity checks (tlsAllowInvalidCertificates=true)
const uri = 'mongodb+srv://lathavairamuthu1004_db_user:flytowards@cluster0.povenne.mongodb.net/flytowardsBlog?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true';

async function run() {
    console.log("Testing SRV connection with Google DNS AND Bypassed TLS certificate validation...");
    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
    try {
        await client.connect();
        console.log("✅ SUCCESS! Connected to MongoDB Atlas successfully!");
        await client.close();
        process.exit(0);
    } catch (err) {
        console.error("❌ FAILED:", err.message);
        process.exit(1);
    }
}

run();
