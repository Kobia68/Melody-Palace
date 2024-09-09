import express from "express";
import { getPostDetails, getPosts } from "../controllers/appController";

const router = express.Router()

router.post("/", getPosts)
router.post("/post:id", getPostDetails)


export default router;