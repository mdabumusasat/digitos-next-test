"use client";
import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="outer-box">
        <div className="bg-image">
          <img
            src="/assets/images/background/contact1-1.png"
            alt="background"
          />
        </div>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-6">
              <div className="inner-column wow fadeInUp" data-wow-delay="200ms">
                <div className="sec-title light">
                  <div className="h6 sub-title">Contact us</div>
                  <h2 className="h2 title char-animation">
                    Let’s Start the Conversation and Build Something Great
                  </h2>
                </div>
                <div className="content-box">
                  <div className="inner-box">

                    {/* MAP */}
                    <iframe
                      className="map w-100"
                      title="map"
                      src="https://maps.google.com/maps?width=100%25&height=300&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                      height="300"
                      loading="lazy"
                    />
                    <div className="info-box">
                      <div className="info">
                        <div className="h5 title">Location:</div>
                        <div className="content">
                          <i className="icon fa-solid fa-location-dot"></i>
                          <div className="text">
                            Holland Park Holland, London 7QU
                          </div>
                        </div>
                      </div>
                      <div className="info">
                        <div className="h5 title">Email:</div>
                        <div className="content">
                          <i className="icon fa-solid fa-envelope"></i>
                          <div className="text">
                            <span>example@gmail.com</span>
                            <span>info8797@gmail.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-column col-lg-6">
              <div className="inner-column wow fadeInUp" data-wow-delay="400ms">
                <div className="form-box">
                  <div className="inner-box">
                    <form>
                      <div className="row gx-4">
                        <div className="col-sm-6">
                          <div className="form-clt">
                            <label>Your Name</label>
                            <input type="text" placeholder="Full Name" required />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-clt">
                            <label>Email Address</label>
                            <input type="email" placeholder="Email Address" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-clt">
                            <label>Phone Number</label>
                            <input type="text" placeholder="Phone Number" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-clt">
                            <label>Select Service</label>
                            <select>
                              <option>Select Service</option>
                              <option>UI/UX Design</option>
                              <option>Digital Branding</option>
                              <option>Digital Painting</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-clt">
                            <label>Message</label>
                            <textarea placeholder="Write Message" />
                          </div>
                        </div>
                        <div className="col-sm-12 wow fadeInUp animated" data-wow-delay=".2s">
                          <button type="submit" className="theme-btn btn-style-one">Submit Now <span><img src="/assets/images/icons/arrow.png" alt=""/></span></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;