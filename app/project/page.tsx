import Link from "next/link";
import React from "react";
export default function Home() {
  return (
    <>
      <div className="full-page-div">
        <h1>Projects</h1>
        <h3>Briefed</h3>
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
          <div className="proj-sec">
            <ol>
              <li>
              <Link href="https://github.com/maan314/cli-todos-giaic"><h1 className="proj-li">CLI To Do's
                </h1>
                </Link>
                Using Typescript and NodeJs 
              </li>
              
              <li>
              <Link href="https://github.com/maan314/Animated-Website"> <h1 className="proj-li">
                  Animated Web
               </h1></Link> 
                Using only Html Css Js
              </li>
              <li>
              <Link href="https://github.com/maan314/Cli-Adventure-Game"> <h1 className="proj-li">
                  CLI Adventure Game
               </h1></Link> 
                Interactive game using Ts
              </li>
            </ol>
          </div>
        </div>
      </div>
      
      <footer>
      <h1 className="footer">@Muhammad-Usman</h1>
      </footer>
    </>
  );
}
