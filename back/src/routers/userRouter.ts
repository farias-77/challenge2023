import { getUserData, transferTokens } from "../controllers/userController";
import tokenValidation from "../middlewares/tokenValidationMiddleware";
import { schemaValidation } from "../middlewares/schemaValidationMiddleware";
import { transferSchema } from "../schemas/userSchemas";

import { Router } from "express";
const router = Router();

router.get("/user", tokenValidation, getUserData);
router.post(
    "/transfer",
    tokenValidation,
    schemaValidation(transferSchema),
    transferTokens
);

export default router;
