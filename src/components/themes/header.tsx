import React, { useState } from "react";
import { removeItem } from "../utils";
import { withRouter } from "next/router";
import { useSidebarStore } from "@/store/utils";
import Cookies from "js-cookie";

const Header = (props: any) => {
  const { toggleSidebar } = useSidebarStore();

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="app-header navbar navbar-expand bg-body">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <span
              className="nav-link"
              onClick={toggleSidebar}
              data-widget="pushmenu"
              aria-label="Menu Hide Bar"
              role="button"
            >
              <i className="fas fa-bars" />
            </span>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <div className="nav-item dropdown" onMouseEnter={toggleMenu}>
              <div className="nav-link dropdown-toggle user-action">
                <img
                  src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg"
                  className="avatarProfile"
                  alt="Avatar"
                />{" "}
                Sam <b className="caret"></b>
              </div>
              <div
                className={`dropdown-menu ${menu ? "show" : ""}`}
                onMouseLeave={() => setMenu(false)}
              >
                <button type="button" className="dropdown-item">
                  <i className="fa fa-user"></i> Profile
                </button>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => {
                    Cookies.remove("user");
                    props.router.push("/login");
                  }}
                >
                  <i className="nav-icon fas fa-arrow-right-from-bracket"></i>{" "}
                  Logout
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Header);
