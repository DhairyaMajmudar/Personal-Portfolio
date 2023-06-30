import { useState, useEffect } from "react";

const Menu = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="text-lg tracking-wider translate-x-[180px] leading-10 border shadow-xl border-text-slate-300 text-[#00040f] dark:text-slate-300 mt-5 max-w-[150px] p-3 rounded-lg hidden  bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] max-sm:block">
      <ul className="pl-2">
        <li>
          <a href="#about">Home</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <button
          className="text-xl font-semibold tracking-widest"
          onClick={handleTheme}
        >
          {theme === "dark" ? "Dark" : "Light"}
        </button>
      </ul>
    </div>
  );
};
export default Menu;
