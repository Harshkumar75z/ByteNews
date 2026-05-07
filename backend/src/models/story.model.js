import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"]
        },
        url: {
            type: String,
            required: [true, "URL is required"]
        },
        points: {
            type: Number,
            required: [true, "Points are required"],
            default: 0
        },
        author: {
            type: String,
            required: [true, "Author is required"]
        },
        postedAt: {
            type: String,
            required: [true, "Posted time is required"]
        }
    },
    { timestamps: true }
);

const Story = mongoose.model("Story", storySchema);
export default Story;