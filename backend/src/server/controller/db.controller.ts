require('dotenv').config();
import * as mongo from 'mongodb';

export const collections: { events?: mongo.Collection } = {};

export async function databaseConnection() {
    const mongoURI = process.env.MONGODB_CALENDAR;

    if (!mongoURI) {
        throw new Error('MongoDB URI is not provided in environment variables.');
    }

    const client: mongo.MongoClient = new mongo.MongoClient(mongoURI);

    try {
        await client.connect();
        const db: mongo.Db = client.db("eventStore");

        const eventCollection: mongo.Collection = db.collection('events');
        collections.events = eventCollection;

        console.log("Successfully connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
}
