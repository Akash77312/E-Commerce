import express from "express";
const app = express();

import { errorMiddleware } from "./middleware/error.js";

app.use(express.json());

// Route
import product from "./routes/productRoute.js";
import user from "./routes/userRoute.js";

app.use("/api/v1", product);
app.use("/api/v1", user);
// middleware
app.use(errorMiddleware);

export default app;
