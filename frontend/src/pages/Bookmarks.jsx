import { useEffect, useState } from "react";
import StoryCard from "../components/StoryCard";

function Bookmarks() {

    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {

        const savedBookmarks =
            JSON.parse(localStorage.getItem("bookmarks")) || [];

        setBookmarks(savedBookmarks);

    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">

            <h1
                className="
                    text-4xl
                    font-bold
                    mb-10
                    bg-gradient-to-r
                    from-yellow-300
                    to-orange-400
                    text-transparent
                    bg-clip-text
                "
            >
                Bookmarked Stories
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {bookmarks.length > 0 ? (

                    bookmarks.map((story) => (
                        <StoryCard
                            key={story._id}
                            story={story}
                            isBookmarked={true}
                        />
                    ))

                ) : (

                    <div
                        className="
                            backdrop-blur-lg
                            bg-white/10
                            border border-white/10
                            rounded-2xl
                            p-10
                            text-center
                            w-full
                        "
                    >
                        No bookmarked stories yet.
                    </div>

                )}

            </div>
        </div>
    );
}

export default Bookmarks;