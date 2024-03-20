"use client";
import Image from "next/image";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Aos from "aos";
import MobileHeader from "./components/MobileHeader";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Testimonial from "./constants/testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Link from "next/link";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Index() {
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
    <div>
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
      {/* Testimonies */}

      <Contact theme={theme} />
      <hr
        className={`w-[100%] border-2 ${
          theme === "dark" ? "border-gray-800" : "border-gray-300"
        }`}
      />
      <Footer />
    </div>
  );
}
