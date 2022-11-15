import express from "express";
import { getAttendee, getEvent, getSession, getSpeaker } from "../controllers/get.controllers.js";

const router = express.Router();

router.get("/getAttendee", getAttendee);
router.get("/getEvent", getEvent);
router.get("/getSession", getSession);
router.get("/getSpeaker", getSpeaker);

export default router;
