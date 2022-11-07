import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import routes from "./routes/router.js";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

// routes
app.use("/api/v1/", routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("=> server running on port %s", PORT));
