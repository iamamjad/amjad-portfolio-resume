import React from "react";
import Links from "./links/page";
import Header from "./header/page";
import About from "./about/page";
import Services from "./services/page";
import Footer from "./footer/page";
export default function Home() {
  return (
    <>
      <Header />
      <div
        id="hero"
        className="hero route bg-image"
        style={{ backgroundImage: "url(../assets/img/hero-bg.jpg)" }}
      >
        <div className="overlay-itro" />
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              {/*<p class="display-6 color-d">Hello, world!</p>*/}
              <h1 className="hero-title mb-4">
                I am Amjad Gul Full Stack Developer
              </h1>
              <p className="hero-subtitle">
                <span
                  className="typed"
                  data-typed-items="Designer, Developer, Freelancer, Photographer"
                />
              </p>
              {/* <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
            </div>
          </div>
        </div>
      </div>
      <main id="main">
        <About />
        <Services />
        {/* ======= Counter Section ======= */}
        <div
          className="section-counter paralax-mf bg-image"
          style={{ backgroundImage: "url(../assets/img/counters-bg.jpg)" }}
        >
          <div className="overlay-mf" />
          <div className="container position-relative">
            <div className="row">
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="bi bi-check" />
                    </span>
                  </div>
                  <div className="counter-num">
                    <p
                      data-purecounter-start={0}
                      data-purecounter-end={450}
                      data-purecounter-duration={1}
                      className="counter purecounter"
                    />
                    <span className="counter-text">WORKS COMPLETED</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="bi bi-journal-richtext" />
                    </span>
                  </div>
                  <div className="counter-num">
                    <p
                      data-purecounter-start={0}
                      data-purecounter-end={25}
                      data-purecounter-duration={1}
                      className="counter purecounter"
                    />
                    <span className="counter-text">YEARS OF EXPERIENCE</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="bi bi-people" />
                    </span>
                  </div>
                  <div className="counter-num">
                    <p
                      data-purecounter-start={0}
                      data-purecounter-end={550}
                      data-purecounter-duration={1}
                      className="counter purecounter"
                    />
                    <span className="counter-text">TOTAL CLIENTS</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="bi bi-award" />
                    </span>
                  </div>
                  <div className="counter-num">
                    <p
                      data-purecounter-start={0}
                      data-purecounter-end={48}
                      data-purecounter-duration={1}
                      className="counter purecounter"
                    />
                    <span className="counter-text">AWARD WON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Counter Section */}
        {/* ======= Portfolio Section ======= */}
        
        {/* ======= Contact Section ======= */}
        <section
          id="contact"
          className="paralax-mf footer-paralax bg-image sect-mt4 route"
          style={{ backgroundImage: "url(../../assets/img/overlay-bg.jpg)" }}
        >
          <div className="overlay-mf" />
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="contact-mf">
                  <div id="contact" className="box-shadow-full">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="title-box-2">
                          <h5 className="title-left">Send Message Us</h5>
                        </div>
                        <div>
                          <form
                            method="post"
                            role="form"
                            className="php-email-form"
                          >
                            <div className="row">
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    rows={5}
                                    placeholder="Message"
                                    required=""
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 text-center my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">
                                  Your message has been sent. Thank you!
                                </div>
                              </div>
                              <div className="col-md-12 text-center">
                                <button
                                  type="submit"
                                  className="button button-a button-big button-rouded"
                                >
                                  Send Message
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="title-box-2 pt-4 pt-md-0">
                          <h5 className="title-left">Get in Touch</h5>
                        </div>
                        <div className="more-info">
                          <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facilis dolorum dolorem soluta quidem expedita
                            aperiam aliquid at. Totam magni ipsum suscipit amet?
                            Autem nemo esse laboriosam ratione nobis mollitia
                            inventore?
                          </p>
                          <ul className="list-ico">
                            <li>
                              <span className="bi bi-geo-alt" />  Peshawar
                              Pakistan 26000, 
                            </li>
                            <li>
                              <span className="bi bi-phone" /> (+92) 346-9072243
                            </li>
                            <li>
                              <span className="bi bi-envelope" />{" "}
                              amjadkhan89@hotmail.com
                            </li>
                          </ul>
                        </div>
                        <div className="socials">
                          <ul>
                            <li>
                              <a href="">
                                <span className="ico-circle">
                                  <i className="bi bi-facebook" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="ico-circle">
                                  <i className="bi bi-instagram" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="ico-circle">
                                  <i className="bi bi-twitter" />
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="ico-circle">
                                  <i className="bi bi-linkedin" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      <Footer />
    </>
  );
}
