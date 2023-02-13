const { MongoClient } = require('mongodb');

const connectionUrl = 'mongodb://username:password@ferretdb:27017/ferretdb?authMechanism=PLAIN';

let db;

const getDatabaseInstance = async (name) => {
    if (db) {
        return db;
    }

    try {
        const client = await MongoClient.connect(connectionUrl);
        db = client.db(name);
    } catch (err) {
        throw err;
    } finally {
        return db;
    }
}

module.exports = getDatabaseInstance;