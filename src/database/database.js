import mongoose from 'mongoose';

export class Database {
    static connect = async (uri) => {
        try {
            const db = await mongoose.connect(uri);
            console.log(`Database connected: ${db.connection.name}`);
        } catch (error) {
            throw new Error(`Cannot connect: ${error.message}`);
        }
    };

    static disconnect = async () => {
        await mongoose.disconnect();
        console.log('Database disconnected.');
    };
}
