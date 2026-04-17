import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear auth data (token, user, etc.)
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // redirect to login
    navigate("/admin");
  };

  return (
    <nav className="w-full h-14 bg-gray-900 text-white flex items-center justify-between px-4 shadow-md">
      
      {/* LOGO */}
      <div className="text-lg font-bold tracking-wide">
        VOXENTRAX ADMIN
      </div>

      {/* LOGOUT */}
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
      >
        Logout
      </button>
    </nav>
  );
};

export default AdminNavbar;