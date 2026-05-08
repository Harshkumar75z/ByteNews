import { Link, useNavigate } from "react-router-dom";
import { FaBookmark, FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    console.log("clicked");
    try {
      await axios.get("/auth/logout");
      // Remove token from localStorage
      localStorage.removeItem("token");
      dispatch(logout());
      toast.success("Logged Out");
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav
      className="
                sticky top-0 z-50
                backdrop-blur-xl
                bg-white/10
                border-b border-white/10
                px-8 py-4
            "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="
                        text-3xl
                        font-bold
                        bg-gradient-to-r
                        from-cyan-400
                        to-blue-500
                        text-transparent
                        bg-clip-text
                    "
        >
          ByteNews
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Bookmark Button */}
          <Link
            to="/bookmarks"
            className="
                            flex items-center gap-2
                            px-4 py-2
                            rounded-xl
                            bg-white/10
                            hover:bg-white/20
                            transition-all duration-300
                            border border-white/10
                        "
          >
            <FaBookmark className="text-yellow-400" />
            <span className="hidden md:block">Bookmarks</span>
          </Link>

          {/* User Profile */}
          <button
            className="
                            flex items-center gap-2
                            px-4 py-2
                            rounded-xl
                            bg-white/10
                            hover:bg-white/20
                            transition-all duration-300
                            border border-white/10
                        "
          >
            <FaUserCircle className="text-2xl text-cyan-300" />

            <span className="text-white font-medium">
              {user?.username}
            </span>
          </button>
          <button
            onClick={handleLogout}
            className="
      flex items-center gap-2
      px-4 py-2
      rounded-xl
      bg-white/10
      border border-white/10
      transition-all duration-300
      hover:bg-red-500/20
      hover:border-red-500/30
      hover:text-red-400
    "
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
