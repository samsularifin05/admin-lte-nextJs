import React from "react";
import menu from "./sidebar/menu";
import SidebarNavList from "./sidebar/SidebarNavList";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside
      className="app-sidebar bg-body-secondary shadow"
      data-bs-theme="dark"
    >
      <div className="sidebar-brand">
        <span className="brand-text font-weight-light text-center">ADMIN</span>
      </div>
      <div className="sidebar-wrapper">
        <nav className="mt-2">
          <ul className="nav sidebar-menu flex-column">
            {menu.map((menu, index) => (
              <SidebarNavList data={menu} key={index} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
