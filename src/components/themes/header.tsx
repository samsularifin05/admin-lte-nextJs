import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSidebarStore } from "@/store/utils";
import Cookies from "js-cookie";

const Header = () => {
  const { toggleSidebar } = useSidebarStore();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    Cookies.remove("user");
    router.push("/login");

    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <nav className="app-header navbar navbar-expand bg-body">
      <div className="container-fluid">
        {/* Sidebar Toggle Button */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <button
              className="nav-link btn btn-link"
              onClick={toggleSidebar}
              aria-label="Toggle Sidebar"
            >
              <i className="fas fa-bars" />
            </button>
          </li>
        </ul>

        {/* User Dropdown */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle user-action btn btn-link"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
            >
              <img
                src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg"
                className="avatarProfile"
                alt="Avatar"
              />{" "}
              Sam <b className="caret"></b>
            </button>
            <div className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
              <button type="button" className="dropdown-item">
                <i className="fa fa-user"></i> Profile
              </button>
              <button
                type="button"
                className="dropdown-item"
                onClick={handleLogout}
              >
                <i className="nav-icon fas fa-arrow-right-from-bracket"></i>{" "}
                Logout
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
