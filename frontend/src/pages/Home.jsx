import { useEffect, useState } from "react";
import StoryCard from "../components/StoryCard";
import axios from "axios";
import toast from "react-hot-toast";

function Home() {

    const [stories, setStories] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch stories
    const fetchStory = async () => {
        try {
            setLoading(true);
            const res = await axios.get(
                "http://localhost:8000/api/stories"
            );
            setStories(res.data.stories);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStory();
    }, []);

    // Bookmark handler
    const handleBookmark = (story) => {
        const alreadyExists =
            bookmarks.find(
                (item) => item._id === story._id
            );
        let updatedBookmarks;
        if (alreadyExists) {
            updatedBookmarks = bookmarks.filter((item) => item._id !== story._id);
            toast.success("Removed Bookmark");
        } else {
            updatedBookmarks = [
                ...bookmarks,
                story,
            ];
            toast.success("Bookmarked");
        }
        setBookmarks(updatedBookmarks);
        localStorage.setItem(
            "bookmarks",
            JSON.stringify(updatedBookmarks)
        );
    };

    // Load bookmarks
    useEffect(() => {

        const savedBookmarks =
            JSON.parse(
                localStorage.getItem("bookmarks")
            ) || [];

        setBookmarks(savedBookmarks);

    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">

            {/* Top Section */}
            <div className="flex items-center justify-between mb-10">

                <h1
                    className="
                        text-5xl
                        font-bold
                        bg-gradient-to-r
                        from-cyan-400
                        to-blue-500
                        text-transparent
                        bg-clip-text
                    "
                >
                    Latest Stories
                </h1>

                {/* Refresh Button */}
                <button
                    onClick={fetchStory}
                    className="
                        px-5 py-3
                        rounded-xl
                        bg-white/10
                        border border-white/20
                        hover:bg-cyan-500/20
                        hover:border-cyan-400/40
                        transition-all duration-300
                    "
                >
                    {loading
                        ? "Fetching..."
                        : "Fetch New Stories"}
                </button>

            </div>

            {/* Stories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {stories.map((story) => (

                    <StoryCard
                        key={story._id}
                        story={story}
                        handleBookmark={handleBookmark}
                        isBookmarked={
                            bookmarks.some(
                                (item) =>
                                    item._id === story._id
                            )
                        }
                    />

                ))}

            </div>

        </div>
    );
}

export default Home;