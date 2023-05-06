import { getUserData } from "../controllers/userController";

import { Router } from "express";
const router = Router();

router.get("/user/:userId", getUserData);

export default router;
