"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Test from "./Test";
import Aos from "aos";
import Hero from "./Hero";
import Services from "./Services";
import Resume from "./Resume";
import { AiOutlineArrowUp } from "react-icons/ai";
import Testimonial from "./Testimonial";
import { Link } from "react-scroll";
import Contact from "./Contact";
import Footer from "./Footer";
import Portfolio from "./Portfolio";

const Wrapper = () => {
  const [theme, setTheme] = useState("light");
  const [navEffect, setNavEffect] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const onscrollEffect = () => {
    if (window.scrollY >= 350) {
      setNavEffect(true);
    } else {
      setNavEffect(false);
    }
  };

  addEventListener("scroll", onscrollEffect);

  // Theme setting
  // theme settings
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      console.log("Dark theme");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Light theme");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme == "dark" ? "light" : "dark");
    console.log(theme);
  };
  return (
    <div className="relative dark:bg-[#212428] dark:text-[#afb0b0]">
      <Header theme={theme} changeTheme={handleThemeSwitch} />
      <MobileHeader theme={theme} changeTheme={handleThemeSwitch} />
      <Hero theme={theme} />
      <hr
        className={`w-[100%] border-2 ${
          theme === "dark" ? "border-gray-800" : "border-gray-300"
        }`}
      />
      <Services theme={theme} />
      <hr
        className={`w-[100%] border-2 ${
          theme === "dark" ? "border-gray-800" : "border-gray-300"
        }`}
      />
      <Portfolio theme={theme} />
      <hr
        className={`w-[100%] border-2 ${
          theme === "dark" ? "border-gray-800" : "border-gray-300"
        }`}
      />
      <Resume theme={theme} />
      <hr
        className={`w-[100%] border-2 ${
          theme === "dark" ? "border-gray-800" : "border-gray-300"
        }`}
      />
      <Testimonial theme={theme} />
      <hr
        className={`w-[100%] border-2 ${
          theme === "dark" ? "border-gray-800" : "border-gray-300"
        }`}
      />
      <Contact theme={theme} />
      <hr
        className={`w-[100%] border-2 ${
          theme === "dark" ? "border-gray-800" : "border-gray-300"
        }`}
      />
      <Footer />
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={
          navEffect &&
          `p-4 ${
            theme === "dark" ? "dark-theme-shadow-effect" : "shadow-default"
          } cursor-pointer rounded-full text-primary font-bold text-2xl fixed right-4 bottom-8 z-10 ease-in-out duration-300`
        }
      >
        <AiOutlineArrowUp />
      </Link>
    </div>
  );
};

export default Wrapper;
