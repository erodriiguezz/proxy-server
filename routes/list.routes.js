import express from "express";
import { listAttendees, listQuestions, listSessions, listSpeakers } from "../controllers/list.controllers.js";

const router = express.Router();

router.get("/listAttendees", listAttendees);
router.get("/listQuestions", listQuestions);
router.get("/listSessions", listSessions);
router.get("/listSpeakers", listSpeakers);

export default router;
