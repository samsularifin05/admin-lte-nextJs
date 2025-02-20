import Footer from "@/components/themes/footer";
import Header from "@/components/themes/header";
import Sidebar from "@/components/themes/sidebar";
import {
  addWindowClass,
  calculateWindowSize,
  removeWindowClass,
  useWindowSize
} from "@/components/utils/function";
import { useScreenSizeStore, useSidebarStore } from "@/store/utils";
import { useEffect } from "react";

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { screenSize, setScreenSize } = useScreenSizeStore();
  //   const { loading, setLoading } = useLoadingStore();
  const { menuSidebarCollapsed, toggleSidebar } = useSidebarStore();

  const handleToggleMenuSidebar = () => {
    toggleSidebar();
  };

  const windowSize = useWindowSize();
  useEffect(() => {
    // if (getItem("userdata").token === undefined) {
    //   router.push("/login");
    // }
    removeWindowClass("sidebar-closed");
    removeWindowClass("sidebar-collapse");
    removeWindowClass("sidebar-open");
    removeWindowClass("sidebar-expand-lg");

    const size = calculateWindowSize(windowSize.width);
    if (screenSize !== size) {
      setScreenSize(size);
    }

    if (menuSidebarCollapsed && screenSize === "lg") {
      addWindowClass("sidebar-collapse");
    } else if (menuSidebarCollapsed && screenSize === "xs") {
      addWindowClass("sidebar-open");
      addWindowClass("sidebar-expand-lg");
    } else if (!menuSidebarCollapsed && screenSize !== "lg") {
      addWindowClass("sidebar-closed");
      addWindowClass("sidebar-collapse");
    }
  }, [menuSidebarCollapsed, screenSize, setScreenSize, windowSize.width]);

  return (
    <div className="app-wrapper">
      <Sidebar />
      <main className="app-main">
        <Header />
        <main>{children}</main>
      </main>
      <Footer />

      <div
        id="sidebar-overlay"
        className="sidebar-overlay glass-effect"
        onClick={handleToggleMenuSidebar}
        onKeyDown={() => {}}
      />
    </div>
  );
}
