import Story from "../models/story.model.js";

export const getAllStories = async (req, res) => {
    try {
        const stories = await Story.find().sort({ points: -1 });

        res.status(200).json({
            count: stories.length,
            stories
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching stories"
        });
    }
};

export const getSingleStory = async (req, res) => {
    try {
        const story = await Story.findById(req.params.id);

        if (!story) {
            return res.status(404).json({
                message: "Story not found"
            });
        }

        res.status(200).json(story);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching story"
        });
    }
};