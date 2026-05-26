"use client";
import React from "react";
import Link from "next/link";

export default function TeamSection() {
  return (
  <section className="team-section pb-100">
    <div className="outer-box">
    <div className="bg-image"><img src="/assets/images/background/team1-1-bg.png" alt=""/></div>
    <div className="shape-1 bounce-x"><img src="/assets/images/icons/shape-10.png" alt=""/></div>
    <div className="shape-2 bounce-x"><img src="/assets/images/icons/shape-11.png" alt=""/></div>
    <div className="shape-3"><img src="/assets/images/icons/shape-12.png" alt=""/></div>
    <div className="auto-container">
        <div className="sec-title text-center light">
        <div className="h6 sub-title">Our Team</div>
        <div className="h2 title">Meet Our Experienced Team People</div>
        </div>
        <div className="row gx-4">
        <div className="team-block col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="inner-block">
            <div className="images-box">
                <div className="image">
                <img src="/assets/images/resource/team1-1.jpg" alt=""/>
                <img src="/assets/images/resource/team1-1.jpg" alt=""/>
                </div>
            </div>
            <div className="author-info">
                <div className="h4 name"><Link href="/page-team">Jenny Wilson</Link></div>
                <div className="designation">Developer</div>
                <ul className="social-icon">
                <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                <li><Link href="#"><i className="fa-brands fa-youtube"></i></Link></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="team-block col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="400ms">
            <div className="inner-block">
            <div className="images-box">
                <div className="image">
                <img src="/assets/images/resource/team1-2.jpg" alt=""/>
                <img src="/assets/images/resource/team1-2.jpg" alt=""/>
                </div>
            </div>
            <div className="author-info">
                <div className="h4 name"><Link href="/page-team">Kristin Watson</Link></div>
                <div className="designation">Developer</div>
                <ul className="social-icon">
                <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                <li><Link href="#"><i className="fa-brands fa-youtube"></i></Link></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="team-block col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-block">
            <div className="images-box">
                <div className="image">
                <img src="/assets/images/resource/team1-3.jpg" alt=""/>
                <img src="/assets/images/resource/team1-3.jpg" alt=""/>
                </div>
            </div>
            <div className="author-info">
                <div className="h4 name"><Link href="/page-team">Bessie Cooper</Link></div>
                <div className="designation">Designer</div>
                <ul className="social-icon">
                <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                <li><Link href="#"><i className="fa-brands fa-youtube"></i></Link></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="team-block col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="800ms">
            <div className="inner-block">
            <div className="images-box">
                <div className="image">
                <img src="/assets/images/resource/team1-4.jpg" alt=""/>
                <img src="/assets/images/resource/team1-4.jpg" alt=""/>
                </div>
            </div>
            <div className="author-info">
                <div className="h4 name"><Link href="/page-team">John Smith</Link></div>
                <div className="designation">Graphic Designer</div>
                <ul className="social-icon">
                <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                <li><Link href="#"><i className="fa-brands fa-youtube"></i></Link></li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</section>
  );
}