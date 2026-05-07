import { Router } from "express";
import { scrapeController } from "../controllers/scraper.controller.js";

const router = Router();

router.post("/scrape", scrapeController);

export default router;