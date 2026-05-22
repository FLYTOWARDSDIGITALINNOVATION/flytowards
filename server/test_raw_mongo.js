const { MongoClient } = require('mongodb');
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const uri = 'mongodb://lathavairamuthu1004_db_user:flytowards@ac-abu1tvd-shard-00-00.povenne.mongodb.net:27017/flytowardsBlog?ssl=true&authSource=admin';

async function run() {
    console.log("Testing raw mongodb connection to a single node with flytowards password...");
    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
    try {
        await client.connect();
        console.log("✅ SUCCESS! Connected with raw MongoClient!");
        await client.close();
        process.exit(0);
    } catch (err) {
        console.error("❌ FAILED:", err.message);
        process.exit(1);
    }
}

run();
