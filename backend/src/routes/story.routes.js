import { Router } from "express";
import {
    getAllStories,
    getSingleStory
} from "../controllers/story.controller.js";

const router = Router();

router.get("/", getAllStories);
router.get("/:id", getSingleStory);

export default router;