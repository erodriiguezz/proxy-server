import express from "express";
import { getAttendee, getSpeaker } from "../controllers/get.controllers.js";

const router = express.Router();

router.get("/getAttendee", getAttendee);
router.get("/getEvent", (req, res) => {});
router.get("/getSession", (req, res) => {});
router.get("/getSpeaker", getSpeaker);

export default router;
