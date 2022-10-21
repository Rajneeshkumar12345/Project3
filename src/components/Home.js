import React, { useEffect } from "react";
import "./Home.css";
import WebD from "../images/WebD.png";
import Portal from "../images/Portal.png";
import SD from "../images/SD.png";
import MobileApp from "../images/MobileApp.png";
import Outsourcing from "../images/Outsourcing.png";
import WebHosting from "../images/WebHosting.png";
import Backup from "../images/Backup.png";
import Signature from "../images/Signature.png";
import SSL from "../images/SSL.png";
// import IT_Support from "../images/IT_Support.png";
import clt_Research from '../images/clt_Research.png';
import Typewriter from "typewriter-effect";

const Home = () => {
  useEffect(() => {
    document.title = "Home page - CodeLover Technology Pvt Ltd";
  });
  return (
    <>
      <div className="home_app">
        <div className="typewriter">
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString(" Web Design")

                .pauseFor(1000)
                .deleteAll()
                .typeString("Web Development")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Marketing")
                .pauseFor(1000)
                .deleteAll()
                .typeString("IT Infrastructure")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Artificial Intelligence (AI)")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Internet Of Things (IOT)")
                .pauseFor(1000)
                .deleteAll()
                .typeString("CodeLover Technology")
                .start(true);
            }}
          />
        </div>

        <div className="home" style={{ backgroundColor: "#31abd4" }}>
          {/* 10 Card Container start from here */}
          <div className="container">
            <div className="row">
              {/* Card Number 1 */}
              <div
                className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12"
                style={{ marginTop: "-5rem" }}
              >
                <div className="card">
                  <div className="card-img-wrapper">
                    <img
                      className="card-img-top"
                      src={WebD}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">WEB DESIGNING</h5>
                    <p className="card-text">
                      IT Division within organizations need some 30-40 skills to
                      management operations in smooth way. Most of the time
                      these skills...
                    </p>
                    <br></br>
                    <a href="/Service" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Number 2 */}

              <div
                className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12"
                style={{ marginTop: "-5rem" }}
              >
                <div className="card">
                  <div className="card-img-wrapper">
                    <img
                      className="card-img-top"
                      src={Portal}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">WEBSITES AND PORTALS</h5>
                    <p className="card-text">
                      All-round website development services from design to
                      maintenance with web experts websites With Team Work...
                    </p>
                    <br></br>
                    <a href="/Service" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Number 3 */}

              <div
                className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12"
                style={{ marginTop: "-5rem" }}
              >
                <div className="card">
                  <div className="card-img-wrapper">
                    <img
                      className="card-img-top"
                      src={SD}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">SOFTWARE DEVELOPMENT</h5>
                    <p className="card-text">
                      We offer full-cycle development services for web, mobile
                      and desktop that have already brought value to Walmart,
                      eBay and Viber...
                    </p>
                    <br></br>
                    <a href="/Service" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Number 4 */}

              <div className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12">
                <div className="card">
                  <div className="card-img-wrapper">
                    <img
                      className="card-img-top"
                      src={MobileApp}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">MOBILE APP DEVELOPMENT</h5>
                    <p className="card-text">
                      We specialize in development of Mobile Applications Native
                      or Hybrid Technologies as suitable to given...
                    </p>
                    <br></br>
                    <br></br>
                    <a href="/Service" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Number 5 */}

              <div className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12">
                <div className="card">
                  <div className="card-img-wrapper">
                    <img
                      className="card-img-top"
                      src={Outsourcing}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">CONSULTING AND OUTSOURCING</h5>
                    <p className="card-text">
                      We empower clients with our expert IT consulting With more
                      than nine years of experience in meeting human resource
                      requirements, our efforts have proved highly resourceful
                      for different organizational...
                    </p>
                    <a href="/Service" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Number 6 */}

              <div className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12">
                <div className="card">
                  <div className="card-img-wrapper">
                    <img
                      className="card-img-top"
                      src={WebHosting}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">WEB HOSTING</h5>
                    <p className="card-text">
                      We create corporate web portals and intranets to help
                      established enterprises benefit from collaboration and
                      document management...
                    </p>
                    <br></br>
                    <a href="/Service" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Number 7 */}
              <div className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12">
                <div className="card">
                  <div className="card-img-wrapper">
                    <img
                      className="card-img-top"
                      src={Backup}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">DATA BACKUP & RECOVERY</h5>
                    <p className="card-text">
                      Ensure the integrity of your data with CodeLover
                      Technology enterprise-grade data backup and recovery
                      services...
                    </p>
                    <br></br>
                    <br></br>
                    <a href="/Service" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* Card number 8 */}
              <div className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12">
                <div className="card">
                  <div className="card-img-wrapper">
                    <img
                      className="card-img-top "
                      src={Signature}
                      height="400"
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">DIGITAL AND SIGNATURE</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content. With supporting text below as a
                      natural lead-in to additional content. With supporting
                      text below as a natural lead-in to additional content...
                    </p>
                    <a href="/Service" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Number 9 */}
              <div className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12">
                <div className="card">
                  <div className="card-img-wrapper">
                    <img
                      className="card-img-top"
                      src={SSL}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">SSL CERTIFICATE & IT SUPPORT</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content. With supporting text below as a
                      natural lead-in to additional content. With supporting
                      text below as a natural lead-in to additional content...
                    </p>
                    <a href="/Service" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* CARD NUMBER 10 */}

              {/* <div className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12">
                <div className="card">
                  <div className="card-img-wrapper">
                    <img
                      className="card-img-top"
                      src={IT_Support}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">IT SUPPORT</h5>
                    <p className="card-text">
                      Our technical support and maintenance services are fully
                      equipped to enhance & maintain technical efficiency,
                      reduce system downtime and ensure...
                    </p>
                    <a href="/Service" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* our Quality  */}

        <section class="our-approch-wrapp gap-top">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <div class="our-approch-title mt-5">
                  <h1>OUR APPROACH FROM START TO GROWTH</h1>
                </div>
                <div class="our-approch-sub-title">
                  <h5>To fuel your business by connecting all the dots like
                  Research, Design, Development, Content &amp; Marketing</h5>
                </div>
              </div>
            </div>
            <div class="row our-approch-image-content-wrapp align-items-center">
              <div class="col-md-6 col-sm-12 our-approch-image-wrapp">
                <img
                  src={clt_Research}
                 className="img-fluid"
                  alt=""
                />
              </div>
              <div class="col-md-6 col-sm-12 our-approch-content-wrapp">
                <div class="our-app-content-title">
                  <span><h3>We do</h3></span>{" "}
                  <span class="blue-text" style={{color:"rgba(247, 7, 131, 0.8)"}}><h1>Success Probability Research</h1></span>
                  <span><h3>before accepting your project</h3></span>
                 
                </div>
                <p className="succes-text">
                  Research is a very important part that we start with, even
                  before starting the project to see the success probability
                  percentage of that venture. For that, we understand the market
                  demand in terms of searches on search engines, competition,
                  conversion percentage in the industry, check trends on both
                  pulls &amp; push media platforms like Facebook, LinkedIn,
                  Twitter, Google, do a gap analysis. We also go through paid
                  business reports of Industry trends and forecasts, along with
                  publicly available data through usually government sources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* our Testimonial start here  */}
        <section className="client pt-3 pb-5">
          <div className="container">
            <div className="row text-center">
              <div className="col-12">
                <h3 className="display-6 fw-bold text-white">Testimonials</h3>
                <hr
                  className="bg-white mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "100px", height: "3px" }}
                />
                <p className="p-text text-white">What our clients are saying</p>
              </div>
            </div>
            <div className="row align-items-md-center text-white">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  {/* Wrapper for slides */}
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row p-4">
                        <div className="t-card">
                          <i
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          ></i>
                          <p className="lh-lg testimonial_content">
                            Our partnership with CodeLover Technology helped us
                            create and build a digital presence that represents
                            our offering and that is aligned with our name
                            “truMe”. Their design sense, UX expertise and
                            digital marketing capabilities have built our online
                            presence and helped source leads and business
                            opportunities, which was the brief given to them. We
                            have been particularly happy with their eye for
                            detail, their aesthetic sense and customer focus.
                          </p>
                          <i
                            className="fa fa-quote-right"
                            aria-hidden="true"
                          ></i>
                          <br></br>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 pt-3">
                            <img
                              src={SSL}
                              className="rounded-circle img-responsive img-fluid"
                            />
                          </div>
                          <div className="col-sm-10">
                            <div className="arrow-down d-none d-lg-block"></div>
                            <h4>
                              <strong>Ajeet Chaudhary</strong>
                            </h4>
                            <p className="testimonial_subtitle">
                              <span>Managing Director</span>
                              <br></br>
                              <span>IHMCS</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row p-4">
                        <div className="t-card">
                          <i
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          ></i>
                          <p className="lh-lg testimonial_content">
                            CodeLover Technology has helped us gain online
                            visibility which has resulted in an increase in
                            clients and business inquiries. CLT is very
                            knowledgeable in the digital marketing field. With
                            this and Parvinder’s trusted business partners/
                            connections he really can provide the whole package.
                            I have and will continue to gladly recommend CLT to
                            friends and business connections.{" "}
                          </p>
                          <i
                            className="fa fa-quote-right"
                            aria-hidden="true"
                          ></i>
                          <br></br>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 pt-4">
                            <img
                              src={WebD}
                              className="rounded-circle img-responsive img-fluid"
                            />
                          </div>
                          <div className="col-sm-10">
                            <div className="arrow-down d-none d-lg-block"></div>
                            <h4>
                              <strong>Chandan Mishra</strong>
                            </h4>
                            <p className="testimonial_subtitle">
                              <span>Motivational Speaker</span>
                              <br></br>
                              {/* <span>IMS Technologies</span> */}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row p-4">
                        <div className="t-card">
                          <i
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          ></i>
                          <p className="lh-lg testimonial_content">
                            Working with CLT technologies was a pleasant
                            experience. Things that stand out in particular
                            about them are – Their services, their quick
                            response to queries, they were always available to
                            provide feedback as the project went along.
                            Secondly, they demonstrated a clear understanding of
                            the scope and nature of the project and delivered
                            accordingly.
                          </p>
                          <i
                            className="fa fa-quote-right"
                            aria-hidden="true"
                          ></i>
                          <br></br>
                        </div>
                        <div className="row text-lg-start">
                          <div className="col-sm-2 pt-4 align-items-center">
                            <img
                              src={Signature}
                              className="rounded-circle img-responsive img-fluid"
                            />
                          </div>
                          <div className="col-sm-10">
                            <div className="arrow-down d-none d-md-block"></div>
                            <h4>
                              <strong>Dr. Jitendra Sigh Raghuvansi</strong>
                            </h4>
                            <p className="testimonial_subtitle">
                              <span>Founder</span>
                              <br></br>
                              <span>Crasmib</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row p-4">
                        <div className="t-card">
                          <i
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          ></i>
                          <p className="lh-lg  testimonial_content">
                            CodeLover Technology helped us contemporize and
                            align with the new normal. The creative input for
                            the new logo, page designs and UX built by them has
                            made our website at par or probably better than
                            global benchmarks.
                          </p>
                          <i
                            className="fa fa-quote-right"
                            aria-hidden="true"
                          ></i>
                          <br></br>
                        </div>
                        <div className="row text-lg-start">
                          <div className="col-sm-2 pt-4 align-items-center">
                            <img
                              src={Backup}
                              className="rounded-circle img-responsive img-fluid"
                            />
                          </div>
                          <div className="col-sm-10">
                            <div className="arrow-down d-none d-md-block"></div>
                            <h4>
                              <strong> Mrs. Amresh </strong>
                            </h4>
                            <p className="testimonial_subtitle">
                              <span>Founder</span>
                              <br></br>
                              <span>Biosol India</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="controls push-right">
                  <a
                    className="left fa fa-chevron-left btn btn-outline-light"
                    href="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  ></a>
                  <a
                    className="right fa fa-chevron-right btn btn-outline-light"
                    href="#carouselExampleCaptions"
                    data-bs-slide="next"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;