import Link from "next/link";
import React from "react";
export default function Home() {
  return (
    <>
      <div className="full-page-div">
        <h1>Education</h1>
        <h3>the study </h3>
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
          <div className="study-sec">
            <ol>
              <li>
                <h1>BS</h1>
                Bachelor in Computer Science 
              </li>
              <li>
                <h1>
                  ICS
                </h1>
                Inter in Computer Science
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
