import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiTypescript,SiPython  } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import React from "react";
export default function Home() {
  return (
    <>
      <div className="full-page-div">
        <h1>Skills</h1>
        <h3>in existing area</h3>
        <div className="nav-div">
          <nav>
            <ul>
            <li>
              <Link className="link" href="/">Home</Link>
              </li>
              <li>
              <Link className="link" href="project">Projects</Link>
              </li>
              <li>
              <Link className="link" href="skills">Skills</Link>
              </li>
              <li>
                <Link className="link" href="education">Education</Link>
              </li>
              <li>
              <Link className="link" href="contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="skill-div">
            <ul>
              <li className="skill-li">
            <SiTypescript color="blue" size={50} />
                </li>
              <li className="skill-li">
              <TbBrandJavascript color="yellow" size={50} />
              </li>
              <li className="skill-li">
              <SiPython size={50} />
              </li>
              <li className="skill-li">
              <FaReact color="lightblue" size={50} />
              </li>
              <li className="skill-li">
              <RiNextjsFill size={50} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
      <SiTypescript />
      <h1 className="footer">@Muhammad-Usman</h1>
      </footer>
    </>
  );
}
