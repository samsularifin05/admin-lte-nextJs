import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("user"); // Cek cookie 'userdata'

    if (!token) {
      router.push("/login"); // Redirect ke login jika belum login
    } else {
      router.push("/admin/dashboard"); // Redirect ke dashboard jika sudah login
    }
  }, [router]);

  return null; // Tidak perlu menampilkan apa pun
}
