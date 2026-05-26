"use client";
import React from "react";

export default function ContactSectionLayout2() {
  return (
    <section className="contact-section-two">
      <div className="outer-box">
        <div className="bg-image"><img src="/assets/images/background/contact2-1.png" alt=""/></div>
        <div className="auto-container">
          <div className="row">
            <div className="form-column col-lg-7">
              <div className="inner-column wow fadeInUp" data-wow-delay="200ms">
                <div className="sec-title light">
                  <div className="h6 sub-title">Contact us</div>
                  <div className="h2 title char-animation">Let’s Start the Conversation & Build Something Great</div>
                </div>
                <div className="form-box wow fadeInUp" data-wow-delay="400ms">
                  <div className="inner-box">
                    <form action="#">
                      <div className="row gx-4">
                        <div className="col-sm-6 wow fadeInUp animated" data-wow-delay=".2s">
                          <div className="form-clt">
                            <label>Your Name</label>
                            <input type="text" name="name" id="name" placeholder="Full Name" />
                          </div>
                        </div>
                        <div className="col-sm-6 wow fadeInUp animated" data-wow-delay=".4s">
                          <div className="form-clt">
                            <label>Email Address</label>
                            <input type="email" name="e-mail" id="email" placeholder="Email Address"/>
                          </div>
                        </div>
                        <div className="col-sm-6 wow fadeInUp animated" data-wow-delay=".2s">
                          <div className="form-clt">
                            <label>Phone Number</label>
                            <input type="text" name="phone" id="phone" placeholder="Phone Number"/>
                          </div>
                        </div>
                        <div className="col-sm-6 wow fadeInUp animated" data-wow-delay=".2s">
                          <div className="form-clt">
                            <label>Select Service</label>
                            <select>
                              <option data-value="I would like to discussed">Select Service</option>
                              <option data-value="UI/UX Design">UI/UX Design</option>
                              <option data-value="Digital Branding">Digital Branding</option>
                              <option data-value="Digital Painting">Digital Painting</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-12 wow fadeInUp animated" data-wow-delay=".2s">
                          <div className="form-clt">
                            <label>Your Name</label>
                            <textarea name="form_message" className="required" placeholder="Write Message"></textarea>
                          </div>
                        </div>
                        <div className="col-sm-12 wow fadeInUp animated" data-wow-delay=".2s">
                          <button className="theme-btn btn-style-one" type="submit">Submit Now <span><img src="/assets/images/icons/arrow.png" alt=""/></span></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-column col-lg-5">
              <div className="inner-column wow fadeInUp" data-wow-delay="200ms">
                <div className="shape-1 animate-circle"><img src="/assets/images/icons/shape-32.png" alt=""/></div>
                <div className="image wow fadeInUp" data-wow-delay="400ms"><img src="/assets/images/resource/contact2-1.png" alt=""/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}