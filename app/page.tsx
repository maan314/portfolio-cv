import Link from "next/link";
import React from "react";
export default function Home() {
  return (
    <>
      <div className="full-page-div">
        <h1>MUHAMMAD USMAN</h1>
        <h3>Software Engineer</h3>
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
          
          <div className="summary">
            <p className="obj-p">
              I am a passionate software engineer with expertise in building
              scalable web applications. I have experience in both frontend and
              backend development, focusing on delivering innovative and
              efficient solutions. I enjoy solving complex problems and
              contributing to the success of the teams and projects I work on.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, fuga.
            </p>
          </div>
        </div>
      </div>
      <footer>
      <h1 className="footer">@Muhammad-Usman</h1>
      </footer>
      </>
  );
}
