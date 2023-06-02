// import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const router = useRouter();
  // page transition on navigation buttons click event
  useEffect(() => {
    router.beforePopState((event) => {
      sessionStorage.setItem("isSession", "true");
      sessionStorage.setItem("preloader", "");

      const transitionTl = gsap.timeline();

      //  page transition

      return false;
    });

    // if (!sessionStorage.getItem("isSession")) {
    //   router.reload();
    //   sessionStorage.setItem("isSession", "true");
    // }

    // router.
    return () => {
      router.beforePopState(() => {
        return true;
      });
    };
  }, [router]);

  return <main data-selector="main">{children}</main>;
};

export default Layout;
