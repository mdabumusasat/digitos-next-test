"use client";
import Link from "next/link";
import React from "react";

export default function Footer2() {
  return (
    <>
    <section className="main-footer footer-style-two">
      <div className="bg-image"><img src="/assets/images/resource/footer2-1.png" alt=""/></div>
      <div className="auto-container">
        <div className="upper-box">
          <div className="row gx-4 align-items-center">
            <div className="col-lg-3">
              <div className="logo"><img src="/assets/images/logo.png" alt=""/></div>
            </div>
            <div className="col-xl-8 offset-xl-1 col-lg-9">
              <div className="info-box">
                <div className="info">
                  <i className="icon fa-solid fa-phone"></i>
                  <div className="content">
                    <span className="number one">(629) 555-0129</span>
                    <span className="number">(219) 555-0114</span>
                  </div>
                </div>
                <div className="info">
                  <i className="icon fa-solid fa-clock"></i>
                  <div className="content">
                    <span>Mon - Fri</span>
                    <span className="time"> 9.00 am - 8.00pm </span>
                  </div>
                </div>
                <div className="info">
                  <i className="icon fa-solid fa-location-dot"></i>
                  <div className="content">
                    <span className="location">410 Sandtown, California 94001,USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widgets-section">
          <div className="row gx-4">
            <div className="footer-column col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
              <div className="footer-widget about-widget wow fadeInLeft">
                <div className="image"><img src="/assets/images/resource/footer2-1.jpg" alt=""/></div>
              </div>
            </div>
            <div className="footer-column col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="400ms">
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
            <div className="footer-column col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="600ms">
              <div className="footer-widget links-widget style-two">
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
            <div className="footer-column col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="800ms">
              <div className="footer-widget subscribe-widget">
                <div className="h3 widget-title">Subscribe to Newsletter</div>
                <div className="from-clt">
                  <input type="email" name="e-mail" id="email2" placeholder="Enter Email" />
                  <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="social-icon">
                  <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                  <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                  <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                  <Link href="#"><i className="fa-brands fa-pinterest"></i></Link>
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
    </section>
    </>
  );
}