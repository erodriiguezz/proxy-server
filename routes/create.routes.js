import express from "express";
import { createAttendee } from "../controllers/create.controllers.js";

const router = express.Router();

router.post("/createAttendee", createAttendee);

export default router;
