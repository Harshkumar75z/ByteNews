import { Router } from "express";
import {
    registerUserController,
    loginUserController,
    logoutUserController,
} from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", registerUserController);
authRouter.post("/login", loginUserController);
authRouter.get("/logout", logoutUserController);

export default authRouter;