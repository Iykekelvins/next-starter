import { useRouter } from "next/router";
import { useEffect } from "react";
import { gsap } from "gsap";

import NextLink from "next/link";
import Splitting from "splitting";

const Link = ({ href, children, className }) => {
  const router = useRouter();

  useEffect(() => {
    window.onbeforeunload = function () {
      sessionStorage.clear();
      Splitting();
    };
  }, []);

  return (
    <NextLink
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        sessionStorage.setItem("isSession", "true");
        sessionStorage.setItem("preloader", "true");

        const transitionTl = gsap.timeline();

        if (router.pathname === href) {
          window.scrollTo(0, 0);
        } else {
          // page transition
        }
      }}
    >
      {children}
    </NextLink>
  );
};

export default Link;
