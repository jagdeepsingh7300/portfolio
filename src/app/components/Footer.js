import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={style.footer_container}>
      <div className={`container ${style.main_footer}`}>
        <div className="row">
          <div className={`col-md-6 ${style.left_footer_section}`}>
            <p>Questions?</p>
            <p>
              Drop me a line at{" "}
              <a href="mailto: singhj7300@gmail.com">singhj7300@gmail.com</a>
            </p>
            <div className="social_links">
              <Link
                href="https://www.linkedin.com/in/jagdeep-singh-b0497016b/"
                target="_blank"
              >
                <Image
                  src={"/icons8-instagram-48.png"}
                  quality={100}
                  width={50}
                  height={50}
                  alt="banner image"
                ></Image>
              </Link>
              <Link
                href="https://www.facebook.com/jagdeep.singh.90475069/"
                target="_blank"
              >
                <Image
                  src={"/icons8-facebook-48.png"}
                  quality={100}
                  width={50}
                  height={50}
                  alt="banner image"
                ></Image>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jagdeep-singh-b0497016b/"
                target="_blank"
              >
                <Image
                  src={"/icons8-linkedin-48.png"}
                  quality={100}
                  width={50}
                  height={50}
                  alt="banner image"
                ></Image>
              </Link>
            </div>
          </div>
          <div className={`col-md-6 ${style.quick_links_container}`}>
            <h4>Quick Links</h4>
            <ul className={style.quick_links}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/experience">Experience</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className={style.right_reserved}>
            © Jagdeep Singh | 2023 | All rights reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
