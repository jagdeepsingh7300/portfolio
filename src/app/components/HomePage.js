import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
const HomePage = () => {
  return (
    <>
      <div className={`${styles.banner} `}>
        <Image
          src={"/jagdeep.png"}
          fill
          quality={99}
          sizes="(max-width: 768px) 100vw"
          alt="banner image"
        ></Image>
        <div className={styles.hero_section}>
          <div className={styles.hero_section_container}>
            <h1 className={styles.hero_sectionName}>Hi, I'm JAGDEEP SINGH</h1>
            <p className={styles.hero_section_heading}>A web Developer</p>
            <p className={styles.hero_section_decription}>
              Where creativity meets technology, we make the web come alive.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="skills-heading" style={{ textAlign: "center" }}>
          <h2>Skills</h2>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div
              className="card "
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                className="card-imgs"
                src="javascript.gif"
                alt="Card image cap"
                width="50rem"
                height="50rem"
                style={{
                  marginLeft: "10px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">JavaScript</h5>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-container w3-blue w3-round-xlarge"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card "
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                className="card-imgs"
                src="es6.png"
                alt="Card image cap"
                width="50rem"
                height="50rem"
                style={{
                  marginLeft: "10px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">ES2015 / ES6+</h5>

                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-container w3-blue w3-round-xlarge"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card "
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                className="card-imgs"
                src="nextjs.svg"
                alt="Card image cap"
                width="50rem"
                height="50rem"
                style={{
                  marginLeft: "10px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Next.js 13 </h5>

                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-container w3-blue w3-round-xlarge"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                className="card-imgs"
                src="automation.png"
                alt="Card image cap"
                width="50rem"
                height="40rem"
                style={{
                  marginLeft: "10px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Automated testing </h5>

                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-container w3-blue w3-round-xlarge"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                className="card-imgs"
                src="reactjs.png"
                alt="Card image cap"
                width="50rem"
                height="40rem"
                style={{
                  marginLeft: "10px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">React.js</h5>

                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-container w3-blue w3-round-xlarge"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                className="card-imgs"
                src="php.png"
                alt="Card image cap"
                width="50rem"
                height="30rem"
                style={{
                  marginLeft: "10px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">PHP</h5>

                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-container w3-blue w3-round-xlarge"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                className="card-imgs"
                src="jqquery.png"
                alt="Card image cap"
                width="50rem"
                height="50rem"
                style={{
                  marginLeft: "10px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">jQuery</h5>

                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-container w3-blue w3-round-xlarge"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                className="card-imgs"
                src="rest-api-icon.png"
                alt="Card image cap"
                width="50rem"
                height="45rem"
                style={{
                  marginLeft: "10px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">RESTful API</h5>

                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-container w3-blue w3-round-xlarge"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                className="card-imgs"
                src="mysql.png"
                alt="Card image cap"
                width="50rem"
                height="40rem"
                style={{
                  marginLeft: "10px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">MySQL</h5>

                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-container w3-blue w3-round-xlarge"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                className="card-imgs"
                src="redux.png"
                alt="Card image cap"
                width="50rem"
                height="50rem"
                style={{
                  marginLeft: "10px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Redux toolkit</h5>

                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-container w3-blue w3-round-xlarge"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                className="card-imgs"
                src="automation.png"
                alt="Card image cap"
                width="50rem"
                height="40rem"
                style={{
                  marginLeft: "10px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Automated testing </h5>

                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-container w3-blue w3-round-xlarge"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
