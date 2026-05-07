import axios from "axios";
import cheerio from "cheerio";
import Story from "../models/story.model.js";

export const scrapeStories = async () => {
    try {
        const { data } = await axios.get("https://news.ycombinator.com");
        const $ = cheerio.load(data);

        const stories = [];

        $(".athing").each((i, el) => {
            if (i >= 10) return; // top 10 only

            const title = $(el).find(".titleline a").text();
            const url = $(el).find(".titleline a").attr("href");

            const subtext = $(el).next();

            const pointsText = subtext.find(".score").text();
            const points = pointsText ? parseInt(pointsText) : 0;

            const author = subtext.find(".hnuser").text();
            const postedAt = subtext.find(".age").text();

            stories.push({
                title,
                url,
                points,
                author,
                postedAt
            });
        });

        // clear old data
        await Story.deleteMany({});

        // insert new data
        await Story.insertMany(stories);

        console.log("Scraping done ✅");
    } catch (error) {
        console.error("Scraper error:", error.message);
    }
};