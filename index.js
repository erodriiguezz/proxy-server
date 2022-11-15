import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import createRoutes from "./routes/create.routes.js";
import listRoutes from "./routes/list.routes.js";
import getRoutes from "./routes/get.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

// routes
app.use("/api/v1", createRoutes);
app.use("/api/v1", listRoutes);
app.use("/api/v1", getRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("=> server running on port %s", PORT));
