"use client";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Product Advertisement",
    category: "Graphic & Web Design",
    image: "/assets/images/resource/project1-1.jpg",
    styleTwo: true,
  },
  {
    title: "UI/UX Design",
    category: "Web Design",
    image: "/assets/images/resource/project1-2.jpg",
    styleTwo: true,
  },
  {
    title: "Digital Branding",
    category: "App Design",
    image: "/assets/images/resource/project1-3.jpg",
  },
  {
    title: "Digital Painting",
    category: "Digital Art",
    image: "/assets/images/resource/project1-4.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section position-relative">
      <div className="shape-1 animate-circle">
        <img
          src="/assets/images/icons/shape-9.png"
          alt="shape"
        />
      </div>
      <div className="outer-box">
        <div className="row">
          <div className="col-xl-4 scroll-to-fixed-parent">
            <div className="sec-title scroll-to-fixed-child">
              <div className="h6 sub-title">Featured Project</div>

              <h2 className="title char-animation">
                Case Studies That Reflect Our Expertise
              </h2>

              <Link
                href="/page-projects"
                className="theme-btn btn-style-one"
              >
                See All Case Studies

                <span>
                  <img
                    src="/assets/images/icons/arrow.png"
                    alt="arrow"
                  />
                </span>
              </Link>
            </div>
          </div>
          <div className="project-column col-xl-8">
            <div className="inner-column">
              <div className="style-text">case studies</div>
              <div className="row">
                {projects.map((project, index) => (
                  <div
                    className="project-block col-md-6"
                    key={index}>
                    <div
                      className={`inner-block ${
                        project.styleTwo ? "style-two" : ""
                      }`}>
                      <div className="image">
                        <img
                          src={project.image}
                          alt={project.title}
                        />
                        <img
                          src={project.image}
                          alt={project.title}
                        />
                      </div>
                      <div className="content-box">
                        <div className="inner-box">
                          <div className="content">
                            <h4 className="title">
                              <Link href="/page-project-details">
                                {project.title}
                              </Link>
                            </h4>
                            <div className="cat">
                              {project.category}
                            </div>
                          </div>
                          <Link href="/page-project-details">
                            <i className="icon fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;