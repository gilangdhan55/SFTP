import sql from "mssql"; 
import mongoose from "mongoose";
import "dotenv/config";

const configDb = {
    user: process.env.DB1_USER,
    password: process.env.DB1_PASSWORD,
    server: process.env.DB1_SERVER,
    database: process.env.DB1_NAME,
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
};


const db = async () => {
    try {
        const pool = await sql.connect(configDb);
        console.log('Connected to Database 1');
    return pool;
    } catch (err) {
        console.error('Database 1 connection failed:', err);
    }
}

const db2 = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 30000
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit on failure
    }
}
  
export {db, db2, mongoose}