"use client";
import React from "react";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import VerticalTabs from "../components/VerticalTabs";
import style from "../styles/Experience.module.css";

const experience = () => {
  const styles = {
    backgroundImage: 'url("experienceImg.webp")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "690px",
    opacity: 0.7,
    // Additional styles
  };
  return (
    <>
      <div className={style.hero}>
        <div className="container">
          <h1
            style={{
              color: "white",
              margin: "0px auto",
              maxWidth: "1100px",
              textAlign: "center",
            }}
          >
            Where I’ve Worked
          </h1>
          <div
            style={{
              margin: "0px auto",
              maxWidth: "900px",
              backgroundColor: "white",
            }}
          >
            <div class="d-flex align-items-start">
              <div
                class="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  class="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  LN Webworks Private Limited
                </button>
                <button
                  class="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Kinex Media - Full-Service Digital Agency
                </button>
                <button
                  class="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  C.S. Soft Solutions (India) Pvt Ltd
                </button>
              </div>
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <ul>
                    <li>
                      Participated in the design and development of websites
                      using HTML, CSS, and JavaScript (ES6+).
                    </li>
                    <li>
                      Implemented responsive web design for optimal user
                      experience across devices.
                    </li>
                    <li>
                      Assisted in debugging and troubleshooting website issues.
                    </li>
                    <li>
                      Worked on front-end of applications to create custom UI
                      using Reactjs, Material UI.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to translate
                      design mockups and wireframes into fully functional React
                      components, ensuring seamless integration with backend
                      services like GraphQL.
                    </li>
                    <li>
                      Implemented state management solutions such as Redux and
                      context API to efficiently manage
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <ul>
                    <li>
                      Developed and maintained PHP-based web applications for
                      clients.
                    </li>
                    <li>
                      Collaborated with designers and project managers to
                      implement website features and functionalities.
                    </li>
                    <li>
                      Conducted code reviews and ensured code quality and
                      security.
                    </li>
                    <li>
                      Developed custom plugins for WordPress websites to create
                      custom functionality.
                    </li>
                    <li>Worked on customize themes, databases and plugins.</li>
                    <li>
                      Integrated third-party APIs and libraries to add advanced
                      functionalities and streamline data handling processes.
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <ul>
                    <li>Worked on Imdb api to created movie app.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default experience;
