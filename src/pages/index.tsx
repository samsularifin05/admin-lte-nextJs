import Link from "next/link";
import Cookies from "js-cookie";
export default function Home() {
  const token = Cookies.get("user");
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1>Welcome to Landing Page</h1>
      {token ? (
        <Link href={"/admin/dashboard"}>Dashboard</Link>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
    </div>
  );
}
