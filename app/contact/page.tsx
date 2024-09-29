import Link from "next/link";
import React from "react";
import { FaLinkedin,FaGithubSquare,FaInstagramSquare   } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export default function Home() {
  return (
    <>
      <div className="full-page-div">
        <h1>Contact</h1>
        <h3>you can reach through</h3>
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
          <div className="contact-li">
            <ol>
                <li>
                    <Link className="contact-list-linked" href="https://www.linkedin.com/in/muhammad-usman-93b673215/">
                    <FaLinkedin />
                    </Link>
                </li>
                <li >
                    <Link className="contact-list" href="https://github.com/maan314">
                    <FaGithubSquare />
                    </Link>
                </li>
                <li>
                    <Link className="contact-list-insta" href="https://www.instagram.com/us_man143?igsh=djkyc240ejMzaTl2">
                    <FaInstagramSquare />
                    </Link>
                </li>
                <li>
                    <Link className="contact-list-insta" href="">
                    <SiGmail />
                    </Link>
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
