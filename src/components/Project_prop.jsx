/* eslint-disable react/prop-types */
import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";

const Project_prop = (props) => {
  return (
    <>
      <div className=" border-[#00040f] shadow-xl  bg-[#e1e1e1] dark:bg-transparent dark:border-white border rounded-xl h-[370px] max-sm:h-[450px] p-7  max-sm:p-3  hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1] dark:from-[#00040F] dark:to-[#0B274C]">
        <div className="HEADER">
          <div className="HEADING flex gap-7 max-sm:gap-0">
            <div className="p-3 ">
              <img
                src={props.img}
                alt=""
                className="max-w-[100px] rounded-full border border-[#00040f]"
              />
            </div>
            <div className="p-3">
              <h1 className=" font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r p-1  from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-xl mb-2 ">
                {props.title}
              </h1>
              <h3 className="text-[#00040f] dark:text-slate-200 p-1 ">
                Tech Stack
              </h3>

              <div className="flex gap-1 p-1 -translate-x-2">
                {props.html5}
                {props.css3}
                {props.javascript}
                {props.tailwindcss}
                {props.react}
                {props.vite}
              </div>
            </div>
          </div>
        </div>

        <p className="text-slate-500 mt-5 text-lg px-5">{props.para}</p>

        <div className="flex gap-2 text-[#00040f] dark:text-slate-200 p-2 pl-5 mt-5 text-3xl">
          <a href={props.github_link}>
            <SiGithub />
          </a>
          <a href={props.link} target="_blank" rel="noreferrer">
            <SlLink />
          </a>
        </div>
      </div>
    </>
  );
};
export default Project_prop;
