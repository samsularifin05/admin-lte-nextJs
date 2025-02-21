import { Logo } from "@/styles";
import { doDecrypt, doEncrypt } from "./encrypt";
import { useState, useEffect } from "react";
import Image from "next/image";

export const getItem = (nama: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(doEncrypt(nama)) === null
      ? []
      : doDecrypt(JSON.parse(localStorage.getItem(doEncrypt(nama)) || "[]"));
  }
};

export const LoadingApp = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 position-fixed w-100 top-0 start-0 bg-white"
      style={{ zIndex: 9999 }}
    >
      <Image
        className="animation__shake"
        src={Logo}
        alt="AdminLTELogo"
        height={60}
        width={60}
      />
    </div>
  );
};

export const setItem = (nama: string, data: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(doEncrypt(nama), JSON.stringify(doEncrypt(data)));
  }
};

export const removeItem = (nama: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(doEncrypt(nama));
  }
};

interface PropsLoading {
  loading: boolean;
}
export const LoadingContent = (props: PropsLoading) => {
  return (
    <div
      id="cover-spin"
      style={{ display: props.loading ? "block" : "none" }}
    ></div>
  );
};

export const addWindowClass = (classList: string) => {
  const window: HTMLElement | null = document && document.getElementById("app");
  if (window) {
    // @ts-ignore
    window.classList.add(classList);
  }
};

export const calculateWindowSize = (windowWidth: number) => {
  if (windowWidth >= 1200) {
    return "lg";
  }
  if (windowWidth >= 992) {
    return "md";
  }
  if (windowWidth >= 768) {
    return "sm";
  }
  return "xs";
};

// export const LoadingApp = () => {
//   return (
//     <div className="preloader flex-column justify-content-center align-items-center">
//       <img
//         className="animation__shake"
//         src={Logo}
//         alt="AdminLTELogo"
//         height="60"
//         width="60"
//       />
//     </div>
//   );
// };

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export const removeWindowClass = (classList: string) => {
  const window: HTMLElement | null = document && document.getElementById("app");
  if (window) {
    // @ts-ignore
    window.classList.remove(classList);
  }
};
