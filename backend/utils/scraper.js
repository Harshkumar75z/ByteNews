import axios from "axios";
import * as cheerio from "cheerio";
import Story from "../src/models/story.model.js";

// Scrapes top 10 stories from Hacker News and stores them in MongoDB.
export const scrapeStories = async () => {
    try {

        // Fetch HTML content from Hacker News
        const { data } = await axios.get("https://news.ycombinator.com");

        // Load HTML into cheerio
        const $ = cheerio.load(data);

        // Array to store scraped stories
        const stories = [];

        // Select all story rows
        $(".athing").each((i, el) => {

            // Stop after top 10 stories
            if (i >= 10) return false;

            // Extract story title
            const title = $(el)
                .find(".titleline a")
                .text();

            // Extract story URL
            const url = $(el)
                .find(".titleline a")
                .attr("href");

            // Get metadata row (contains points, author, time)
            const subtext = $(el).next();

            // Extract story points
            const points =
                parseInt(subtext.find(".score").text()) || 0;

            // Extract author name
            const author =
                subtext.find(".hnuser").text();

            // Extract posted time
            const postedAt =
                subtext.find(".age").text();

            // Push story object into array
            stories.push({
                title,
                url,
                points,
                author,
                postedAt
            });
        });

        // Remove old stories from database
        await Story.deleteMany({});

        // Insert newly scraped stories
        await Story.insertMany(stories);
        console.log("Stories scraped successfully");
    } catch (error) {
        console.error("Scraper Error:", error.message);
    }
};