"use client";
import Image from "next/image";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Aos from "aos";
import MobileHeader from "./components/MobileHeader";
import Hero from "./components/Hero";

export default function Home() {
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
    </div>
  );
}
