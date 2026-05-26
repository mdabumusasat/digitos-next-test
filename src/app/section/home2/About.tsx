"use client";
import React, {useState} from "react";
import Link from "next/link";
import ModalVideo from 'react-modal-video';


export default function AboutSectionTwo() {
  const [isOpen, setOpen] = useState(false);
  return (
      <>
        <section className="about-section-two">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-6">
                <div className="inner-column wow fadeInUp" data-wow-delay="200ms">
                  <div className="sec-title">
                    <div className="h6 sub-title">Who we are</div>
                    <div className="h2 title char-animation">A Creative Digital Agency Focused on Real Results</div>
                    <div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is </div>
                  </div>
                  <div className="info-box">
                    <div className="info">
                      <div className="h5 title">Our Best Specialty</div>
                      <ul className="list-style-one">
                        <li>
                          <i className="icon fa-solid fa-check"></i>
                          <span>Performance Driven Solution</span>
                        </li>
                        <li>
                          <i className="icon fa-solid fa-check"></i>
                          <span>Design With Purpose</span>
                        </li>
                      </ul>
                      <ul className="list-style-one">
                        <li>
                          <i className="icon fa-solid fa-check"></i>
                          <span>Stronger Brand Identity</span>
                        </li>
                      </ul>
                    </div>
                    <div className="image-box">
                      <div className="image"><img src="/assets/images/resource/about2-1.jpg" alt=""/></div>
                      <a className="video-box" onClick={() => setOpen(true)} data-fancybox="gallery" data-caption="">
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <div className="bottom-box">
                    <Link href="/page-about" className="theme-btn btn-style-one">Discover More <span><img src="/assets/images/icons/arrow.png" alt=""/></span></Link>
                    <Link href="#" className="phone_box">
                      <span className="icon"><i aria-hidden="true" className="fa-solid fa-phone-flip"></i></span>
                      <span className="info">
                        Call Anytime
                        <strong>+17 5005 0088</strong>
                      </span>
                    </Link>
                    <div className="shape bounce-x"><img src="/assets/images/icons/shape-27.png" alt=""/></div>
                  </div>
                </div>
              </div>
              <div className="image-column col-lg-6 col-md-8">
                <div className="inner-column">
                  <div className="image-box one wow fadeInUp" data-wow-delay="400ms">
                    <div className="image"><img src="/assets/images/resource/about2-2.jpg" alt=""/></div>
                  </div>
                  <div className="image-box two wow fadeInUp" data-wow-delay="600ms">
                    <div className="image"><img src="/assets/images/resource/about2-3.jpg" alt=""/></div>
                  </div>
                  <div className="round-icon">
                    <div className="icon"><img src="/assets/images/icons/about2-1.png" alt=""/></div>
                    <div className="h3 date">25</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
      </>
  );
}