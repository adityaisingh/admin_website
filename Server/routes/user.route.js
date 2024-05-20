import express from "express";

import { updateUser } from "../controllers/user.contollers.js";
import { verifyToken } from "../utils/veriftytoken.js";
import { deleteUser } from "../controllers/user.contollers.js";

const router = express.Router();

router.post("/update/:id", verifyToken, updateUser);
router.delete("delete/:id", verifyToken, deleteUser);
export default router;
