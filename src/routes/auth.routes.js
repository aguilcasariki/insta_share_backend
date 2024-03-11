import { Router } from "express";
import register from "../controllers/auth.controller.js";
import userDataValidation from "../middlewares/userDataValidation.js";
import duplicateUserValidation from "../middlewares/duplicateUserValidation.js";

const router = Router();

router.post("/register", userDataValidation, duplicateUserValidation, register);

export default router;
