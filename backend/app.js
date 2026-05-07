import express from "express";
import cors from "cors";
import authRouter from "./src/routes/auth.routes.js";
import storyRoutes from "./src/routes/story.routes.js";
import scraperRoutes from "./src/routes/scraper.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter)
app.use("/api/stories", storyRoutes);
app.use("/api", scraperRoutes);

export default app;