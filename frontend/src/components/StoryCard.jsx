import { FaArrowUp, FaBookmark } from "react-icons/fa";

function StoryCard({ story, handleBookmark, isBookmarked }) {

    return (
        <div
            className="
            backdrop-blur-lg
            bg-white/10
            border border-white/20
            rounded-2xl
            p-5
            shadow-xl
            hover:scale-105
            transition-all
            duration-300
        "
        >

            <div className="flex items-center justify-between">

                <span className="flex items-center gap-2 text-orange-400 font-semibold">
                    <FaArrowUp />
                    {story.points}
                </span>

                {/* Bookmark Button */}
                <button
                    onClick={() => handleBookmark(story)}
                    className="
                        p-2 rounded-full
                        bg-white/10
                        hover:bg-white/20
                        transition
                    "
                >
                    <FaBookmark
                        className={
                            isBookmarked
                                ? "text-yellow-400"
                                : "text-white"
                        }
                    />
                </button>

            </div>

            <h2 className="text-xl font-bold mt-4 line-clamp-2">
                {story.title}
            </h2>

            <div className="mt-4 text-gray-300 text-sm flex justify-between">
                <p>{story.author}</p>
                <p>{story.postedAt}</p>
            </div>

            <a
                href={story.url}
                target="_blank"
                rel="noreferrer"
                className="
                    inline-block
                    mt-5
                    px-4 py-2
                    rounded-lg
                    bg-blue-500/20
                    hover:bg-blue-500/30
                    transition
                "
            >
                Read More
            </a>

        </div>
    );
}

export default StoryCard;