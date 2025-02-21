import Link from "next/link";
import { PanelContent } from "../../components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AdminLayout from "@/layouts/adminLayout";
import PublicLayout from "@/layouts/publicLayouts";

function PageNotFound() {
  const router = useRouter();
  const [isAdminPage, setIsAdminPage] = useState(false);

  useEffect(() => {
    if (router.asPath.startsWith("/admin")) {
      setIsAdminPage(true);
    }
  }, [router.asPath]);

  const Layout = isAdminPage ? AdminLayout : PublicLayout;

  return (
    <Layout>
      <PanelContent headerContent>
        <div className="error-page container d-flex flex-column justify-content-center align-items-center vh-100">
          <h1 className="headline text-warning"> 404</h1>
          <div className="error-content text-center">
            <h3>
              <i className="fas fa-exclamation-triangle text-warning" /> Oops!
              Page not found.
            </h3>
            <p>
              We could not find the page you were looking for. Meanwhile,
              <br /> you may{" "}
              <Link href={isAdminPage ? "/admin/dashboard" : "/"}>
                return to {isAdminPage ? "dashboard" : "home"}
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
