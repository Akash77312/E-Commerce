import app from "./app.js"

import dotenv from "dotenv";

import connectDB from './config/database.js'
// handling Uncaught Exception
process.on("uncaughtException",(err)=>{
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due tohandling Uncaught Exception");

  process.exit(1);
})

// Load environment variables from .env file
dotenv.config({
  path:"backend/config/config.env"
});

connectDB()

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on https://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});