import { getUserData } from "../controllers/userController";
import tokenValidation from "../middlewares/tokenValidationMiddleware";

import { Router } from "express";
const router = Router();

router.get("/user", tokenValidation, getUserData);

export default router;
