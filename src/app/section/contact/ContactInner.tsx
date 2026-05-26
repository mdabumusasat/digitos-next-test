"use client";
import React from 'react';
import Link from 'next/link';

const ContactInner: React.FC = (): JSX.Element => {
    return (
        <>
        <section className="contact-details">
          <div className="container pt-110 pb-70">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="sec-title black">
                  <h2>Feel free to write</h2>
                </div>
                <form id="contact_form" name="contact_form">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea name="form_message" className="form-control required" rows={7} placeholder="Enter Message"></textarea>
                  </div>
                  <div className="mb-5">
                    <input name="form_botcheck" className="form-control" type="hidden"/>
                    <button type="submit" className="theme-btn btn-style-three" data-loading-text="Please wait..."><span className="btn-title">Send message</span></button>

                    <button type="reset" className="theme-btn btn-style-three ml-10" data-loading-text="Please wait..."><span className="btn-title">Reset</span></button>
                    
                  </div>
                </form>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="contact-details__right">
                  <div className="sec-title black">
                    <h2>Get in touch with us</h2>
                    <div className="text">Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.</div>
                  </div>
                  <ul className="list-unstyled contact-details__info">
                    <li>
                      <div className="icon">
                        <span className="fa-classic fa-light fa-phone-plus"></span>
                      </div>
                      <div className="text">
                        <div className="h6 mb-1">Have any question?</div>
                        <Link href="#"><span>Free</span> +92 (020)-9850</Link>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fal fa-envelope"></span>
                      </div>
                      <div className="text">
                        <div className="h6 mb-1">Write email</div>
                        <Link href="#">needhelp@company.com</Link>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fal fa-location-arrow"></span>
                      </div>
                      <div className="text">
                        <div className="h6 mb-1">Visit anytime</div>
                        <span>66 broklyn golden street. New York</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Contact Details End--> */}

        {/* <!-- Map Section--> */}
        <section className="map-section">
          <iframe  className="map w-100"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </section>
        {/* <!--End Map Section--> */}
        </>
    )
}
export default ContactInner
