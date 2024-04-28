
//import required libraries
import express from "express";
import { signup, login, logout, userDetail } from "../controllers/user.js";
import { isAuthenticated } from "../middleware/authentication.js";

const router = express.Router();



router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/userdetail",isAuthenticated, userDetail);


export default router;