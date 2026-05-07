import { scrapeStories } from "../../utils/scraper.js";

export const scrapeController = async (req, res) => {
    try {

        await scrapeStories();

        res.status(200).json({
            message: "Scraping completed"
        });

    } catch (error) {

        res.status(500).json({
            message: "Scraping failed"
        });

    }
};