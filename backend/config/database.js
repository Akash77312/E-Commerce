import mongoose from "mongoose";

const connectDB= ()=>{
  mongoose
  .connect(process.env.MONDO_URI, {
    dbName: "ecommerce",
  })
  .then((data) => {
    console.log(`db connected with server: ${data.connection.host}`);
  });
}
export default connectDB;