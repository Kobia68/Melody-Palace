import express from "express";
import { signIn, signOut, signUp } from "../controllers/authController.js";
import { getEventDetails, getEvents } from "../controllers/appController.js";
import { addNewPost, getFinances } from "../controllers/adminController.js";

const router = express.Router()

// Authenticate routes
router.post("/auth/signup", signUp)
router.post("/auth/signin", signIn)
router.post("/auth/signout", signOut)

// Appcontroller routes
router.get("/events", getEvents)
router.get("/post:id", getEventDetails)

// Admin routes
router.post("/admin/profile/newpost", addNewPost)
router.get("/admin/profile/finances", getFinances)



export default router;