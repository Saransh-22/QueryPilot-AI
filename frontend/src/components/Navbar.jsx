import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded-md transition ${isActive
      ? "bg-cyan-600 text-white"
      : "text-gray-300 hover:bg-slate-800 hover:text-white"
    }`;
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <nav className="bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          QueryPilot AI
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-3">

          <NavLink className={navClass} to="/app/dashboard">
            Dashboard
          </NavLink>

          <NavLink className={navClass} to="/app/chat">
            Chat
          </NavLink>

          <NavLink className={navClass} to="/app/database">
            Database
          </NavLink>

          <NavLink className={navClass} to="/app/history">
            History
          </NavLink>

          <NavLink className={navClass} to="/app/settings">
            Settings
          </NavLink>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
          Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;