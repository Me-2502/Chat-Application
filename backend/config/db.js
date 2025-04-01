const { MongoClient } = require('mongodb');
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    const uri = 'mongodb+srv://22bce257:dl@cluster0.t6y6ilg.mongodb.net/Chat?retryWrites=true&w=majority';
    const client = new MongoClient(uri);
    // cachedDb = await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   serverSelectionTimeoutMS: 5000,
    //   socketTimeoutMS: 45000,
    //   maxPoolSize: 10,
    // });
    // console.log(`MongoDB Connected: ${cachedDb.connection.host}`.cyan.underline);
    // return cachedDb;
    // console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    return client;
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;

