import mongoose from 'mongoose';
import config from 'config';

// Getting the connection string 
const db = config.get('mongoURI');

// Connecting to MongoDB
const connectDatabase = async () => {
    try{
        await mongoose.connect(db, {
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error){
        console.error(error.message);

        // Exiting with failure code
        process.exit(1);
    }
};

export default connectDatabase;