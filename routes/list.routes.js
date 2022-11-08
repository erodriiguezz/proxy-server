import express from "express";
// import { listSpeakers } from "../controllers/list.controllers.js";

const router = express.Router();

router.get("/listAttendees", (req, res) => {
  try {
    res.send("hello");
  } catch (error) {
    res.status(500).json({ error });
  }
});
router.get("/listSessions", (req, res) => {});
// router.get("/listSpeakers", listSpeakers);

export default router;
