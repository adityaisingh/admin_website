import express from "express";
import { signup } from "../controllers/Autth.controllers.js";
import { signin } from "../controllers/Autth.controllers.js";
import { google } from "../controllers/Autth.controllers.js";
import { signout } from "../controllers/Autth.controllers.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signout);

export default router;