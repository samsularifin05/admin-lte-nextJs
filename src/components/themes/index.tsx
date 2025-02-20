const Footer = lazy(() => import("./footer"));
const Header = lazy(() => import("./header"));
const Sidebar = lazy(() => import("./sidebar"));

import {
  addWindowClass,
  calculateWindowSize,
  getItem,
  LoadingApp,
  removeWindowClass,
  useWindowSize
} from "../utils/function";
import { Suspense, lazy, useEffect } from "react";
import { withRouter } from "next/router";
import useThemeStore from "@/store/theme";
import {
  useLoadingStore,
  useScreenSizeStore,
  useSidebarStore
} from "@/store/utils";

const Layout = ({ children, router }: any) => {
  const { themes } = useThemeStore();

  const { screenSize, setScreenSize } = useScreenSizeStore();
  const { loading, setLoading } = useLoadingStore();
  const { menuSidebarCollapsed, toggleSidebar } = useSidebarStore();

  const handleToggleMenuSidebar = () => {
    toggleSidebar();
  };

  const windowSize = useWindowSize();
  useEffect(() => {
    if (getItem("userdata").token === undefined) {
      router.push("/login");
    }
    removeWindowClass("sidebar-closed");
    removeWindowClass("sidebar-collapse");
    removeWindowClass("sidebar-open");

    const size = calculateWindowSize(windowSize.width);
    if (screenSize !== size) {
      setScreenSize(size);
    }

    if (menuSidebarCollapsed && screenSize === "lg") {
      addWindowClass("sidebar-collapse");
    } else if (menuSidebarCollapsed && screenSize === "xs") {
      addWindowClass("sidebar-open");
    } else if (!menuSidebarCollapsed && screenSize !== "lg") {
      addWindowClass("sidebar-closed");
      addWindowClass("sidebar-collapse");
    }

    setTimeout(() => {
      setLoading({
        content: false
      });
    }, 1000);
  }, [
    menuSidebarCollapsed,
    router,
    screenSize,
    setLoading,
    setScreenSize,
    windowSize.width
  ]);

  return (
    <Suspense fallback={<LoadingApp />}>
      <div className="wrapper">
        {themes.header && <Header />}
        {themes.sidebar && <Sidebar />}
        {themes.content && children}
        {themes.footer && <Footer />}

        <div
          id="sidebar-overlay"
          role="presentation"
          onClick={handleToggleMenuSidebar}
          onKeyDown={() => {}}
        />
      </div>
      {loading.content && <LoadingApp />}
    </Suspense>
  );
};

export default withRouter(Layout);
