import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <nav
          className={`${styles.navbarcss}  navbar navbar-expand-lg static-top  `}
        >
          <div className="container">
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/Logo.svg"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </Link>
            </div>
            <button
              className="navbar-toggler navbar-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-3">
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" href="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" href="/experience">
                    Experience
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" href="#">
                    Work
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <Link href="/Resume-Jagdeep-Singh.docx" className="mx-3">
                <button className="raise">Resume</button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
