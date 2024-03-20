"use client";
import Image from "next/image";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Aos from "aos";

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
    </div>
  );
}
