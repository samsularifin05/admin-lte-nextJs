import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AdminLayout from "@/layouts/adminLayout";
import PublicLayout from "@/layouts/publicLayouts";
import { PanelContent } from "../../components";

function PageNotFound() {
  const router = useRouter();
  const [isAdminPage, setIsAdminPage] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setIsAdminPage(router.pathname.startsWith("/admin"));
    }
  }, [router.isReady, router.pathname]);

  const Layout = isAdminPage ? AdminLayout : PublicLayout;

  return (
    <Layout>
      <PanelContent headerContent>
        <div className="error-page container d-flex flex-column justify-content-center align-items-center vh-100">
          <h1 className="headline text-warning">404</h1>
          <div className="error-content text-center">
            <h3>
              <i className="fas fa-exclamation-triangle text-warning" /> Oops!
              Page not found.
            </h3>
            <p>
              We could not find the page you were looking for. Meanwhile,
              <br /> you may{" "}
              <Link href={"/admin/dashboard"}>
                <span className="text-primary" style={{ cursor: "pointer" }}>
                  return to {isAdminPage ? "dashboard" : "home"}
                </span>
              </Link>{" "}
              or try using the search form.
            </p>
          </div>
        </div>
      </PanelContent>
    </Layout>
  );
}

export default PageNotFound;
