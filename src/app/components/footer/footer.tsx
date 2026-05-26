"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
    <section className="main-footer footer-style-one">
      <div className="outer-box style-home-one">
        <div className="bg-image"><img src="/assets/images/resource/footer1-1.png" alt=""/></div>
        <div className="auto-container">
          <div className="widgets-section pt-0">
            <div className="row gx-4">
              <div className="footer-column col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                <div className="footer-widget about-widget wow fadeInLeft">
                  <div className="widget-content">
                    <div className="logo"><img src="/assets/images/logo.png" alt=""/></div>
                    <div className="text">Subscribe to get high-potential investment properties, in-depth market insights, and expert recommendations.</div>
                    <div className="form-clt">
                      <input type="email" name="e-mail" id="email2" placeholder="Your email address" />
                      <button className="theme-btn" type="submit">Subscribe<span><img src="/assets/images/icons/arrow2.png" alt=""/></span></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-column col-xl-2 offset-xl-1 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                <div className="footer-widget links-widget">
                  <div className="h5 widget-title">Company</div>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li><Link href="#">About</Link></li>
                      <li><Link href="#">Our Mission</Link></li>
                      <li><Link href="#">Our Blogs</Link></li>
                      <li><Link href="#">Help Center</Link></li>
                      <li><Link href="#">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-column col-xl-2 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                <div className="footer-widget links-widget">
                  <div className="h5 widget-title">Our Solutions</div>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li><Link href="#">Web Development</Link></li>
                      <li><Link href="#">UI/UX Design</Link></li>
                      <li><Link href="#">Mobile <br/>Application</Link></li>
                      <li><Link href="#">Cloud Service</Link></li>
                      <li><Link href="#">Cyber Security </Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-column col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="800ms">
                <div className="footer-widget contact-widget">
                  <div className="h5 widget-title">Contact</div>
                  <div className="widget-content">
                    <div className="info">
                      <i className="icon fa-solid fa-phone-flip"></i>
                      <span>+000 (123) 44 55</span>
                    </div>
                    <div className="info">
                      <i className="icon fa-solid fa-envelope"></i>
                      <span>Support@gmail.com</span>
                    </div>
                    <div className="info">
                      <i className="icon fa-solid fa-location-dot"></i>
                      <span>410 Sandtown, California <br/>94001,USA</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="footer-bottom wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-container">
              <p>© Copyright 2026 by Company.com</p>
              <ul className="social-icon">
                <li>
                  <Link href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                    <span>Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa-brands fa-twitter"></i>
                    <span>Twitter</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                    <span>Linkedin</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa-brands fa-youtube"></i>
                    <span>youtube</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}