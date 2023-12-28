"use client";
import React from "react";
import Link from "next/link";
const AboutPage = () => {
  return (
    <>
      {/* ======= About Section ======= */}
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img
                            src="../assets/img/testimonial-2.jpg"
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p>
                            <span className="title-s">Name: </span>{" "}
                            <span>Amjad Gul</span>
                          </p>
                          <p>
                            <span className="title-s">Profile: </span>{" "}
                            <span>Full Stack developer</span>
                          </p>
                          <p>
                            <span className="title-s">Email: </span>{" "}
                            <span>amjadkhan89@hotmail.com</span>
                          </p>
                          <p>
                            <span className="title-s">Phone: </span>{" "}
                            <span>+923469072243</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skill</p>
                      <span>HTML</span> <span className="pull-right">85%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow={85}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span>CSS3</span> <span className="pull-right">75%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span>PHP</span> <span className="pull-right">50%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span>JAVASCRIPT</span>{" "}
                      <span className="pull-right">90%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About me</h5>
                      </div>
                      <p className="lead">
                        Result-driven web developer with a business-oriented
                        approach and a strong record of delivering cutting-edge
                        software solutions. With over seven years of experience,
                        I have a comprehensive understanding of programming
                        languages, frameworks, and technologies. My expertise
                        lies in full-stack development, excelling in both
                        front-end and back-end development. I specialize in PHP
                        Frameworks and modern JavaScript, leveraging their
                        capabilities to create exceptional solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </>
  );
};
export default AboutPage;
