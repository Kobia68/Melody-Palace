import express from "express";
import { addNewPost, getFinances } from "../controllers/adminController";

const router = express.Router()

router.post("/admin/profile/newpost", addNewPost)
router.post("/admin/profile/finances", getFinances)


export default router;