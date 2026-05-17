const mongoose = require('mongoose');

const uri_srv = 'mongodb+srv://lathavairamuthu1004_db_user:flytowards@cluster0.povenne.mongodb.net/flytowardsBlog?retryWrites=true&w=majority';
const uri_direct = 'mongodb://lathavairamuthu1004_db_user:flytowards@ac-abu1tvd-shard-00-00.povenne.mongodb.net:27017,ac-abu1tvd-shard-00-01.povenne.mongodb.net:27017,ac-abu1tvd-shard-00-02.povenne.mongodb.net:27017/flytowardsBlog?ssl=true&replicaSet=atlas-abu1tvd-shard-0&authSource=admin&retryWrites=true&w=majority';

async function testConnection(uri, name, options = {}) {
    try {
        console.log(`\nTesting ${name}...`);
        await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000, ...options });
        console.log(`✅ SUCCESS: ${name} connected!`);
        await mongoose.disconnect();
        return true;
    } catch (e) {
        console.log(`❌ FAILED: ${name} -> ${e.message.split('\n')[0]}`);
        return false;
    }
}

async function run() {
    console.log("Starting DB tests...");
    let success = false;
    success = success || await testConnection(uri_srv, 'SRV IPv6 (Default)');
    success = success || await testConnection(uri_srv, 'SRV IPv4', { family: 4 });
    success = success || await testConnection(uri_direct, 'Direct IPv6 (Default)');
    success = success || await testConnection(uri_direct, 'Direct IPv4', { family: 4 });
    
    if (!success) {
        console.log("\nAll connection attempts failed.");
        process.exit(1);
    } else {
        process.exit(0);
    }
}

run();
