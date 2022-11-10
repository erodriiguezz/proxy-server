import express from "express";
import { getSpeaker } from "../controllers/get.controllers.js";

const router = express.Router();

router.get("/getAttendee", (req, res) => {});
router.get("/getEvent", (req, res) => {});
router.get("/getSession", (req, res) => {});
router.get("/getSpeaker", getSpeaker);

export default router;
