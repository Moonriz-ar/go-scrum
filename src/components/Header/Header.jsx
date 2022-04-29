import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("logged");
    navigate("/login", { replace: true });
  };

  return (
    <header className="px-5 py-3 drop-shadow bg-slate-800 text-slate-200 sm:px-16">
      <nav className="flex justify-between font-bold">
        <Link to="/" className="sm:text-2xl">
          <span className="text-emerald-500 ">Go</span>Scrum
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default Header;
