
// import mongoose
import mongoose from "mongoose";


//Connection to the database
const connectDb = async () => await mongoose.connect(process.env.DB_URL);

export default connectDb;

