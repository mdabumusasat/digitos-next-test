"use client";
import React from "react";
import Link from "next/link";

export default function ProjectSectionLayout2() {
  return (
    <section className="projects-section-two">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="h6 sub-title">Latest work</div>
          <div className="h2 title char-animation">Check Our Latest Work Showcase</div>
        </div>
        <div className="row gx-4">
          <div className="project-block-two col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="inner-block">
              <div className="image">
                <img src="/assets/images/resource/project2-1.jpg" alt=""/>
                <img src="/assets/images/resource/project2-1.jpg" alt=""/>
              </div>
              <div className="content">
                <div className="cat">UX Research <span></span> Web App Design</div>
                <div className="h4 title"><Link href="/page-project-details">Fintech Payment Solution</Link></div>
              </div>
            </div>
          </div>
          <div className="project-block-two col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
            <div className="inner-block">
              <div className="image">
                <img src="/assets/images/resource/project2-2.jpg" alt=""/>
                <img src="/assets/images/resource/project2-2.jpg" alt=""/>
              </div>
              <div className="content">
                <div className="cat">Product Advertisement <span></span> Design</div>
                <div className="h4 title"><Link href="/page-project-details">Fintech Payment Solution</Link></div>
              </div>
            </div>
          </div>
          <div className="project-block-two col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-block">
              <div className="image">
                <img src="/assets/images/resource/project2-3.jpg" alt=""/>
                <img src="/assets/images/resource/project2-3.jpg" alt=""/>
              </div>
              <div className="content">
                <div className="cat">Digital Painting <span></span> App Design</div>
                <div className="h4 title"><Link href="/page-project-details">Fintech Payment Solution</Link></div>
              </div>
            </div>
          </div>
          <div className="project-block-two col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="800ms">
            <div className="inner-block">
              <div className="image">
                <img src="/assets/images/resource/project2-4.jpg" alt=""/>
                <img src="/assets/images/resource/project2-4.jpg" alt=""/>
              </div>
              <div className="content">
                <div className="cat">Web Development <span></span> Design</div>
                <div className="h4 title"><Link href="/page-project-details">Fintech Payment Solution</Link></div>
              </div>
            </div>
          </div>
          <div className="project-block-two col-xl-8 wow fadeInUp" data-wow-delay="1000ms">
            <div className="inner-block">
              <div className="image">
                <img src="/assets/images/resource/project2-5.jpg" alt=""/>
                <img src="/assets/images/resource/project2-5.jpg" alt=""/>
              </div>
              <div className="content">
                <div className="cat">Digital Research <span></span> Branding</div>
                <div className="h4 title"><Link href="/page-project-details">Fintech Payment Solution</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}