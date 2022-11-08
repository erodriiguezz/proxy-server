import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import listRoutes from "./routes/list.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

// routes
app.use("/api/v1/", listRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("=> server running on port %s", PORT));
