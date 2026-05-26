"use client";

import React from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    image: "/assets/images/resource/project2-1.jpg",
    category: "UX Research",
    categoryTwo: "Web App Design",
    title: "Fintech Payment Solution",
    delay: "200ms",
    columnClass: "col-xl-4 col-md-6",
  },
  {
    id: 2,
    image: "/assets/images/resource/project2-2.jpg",
    category: "Product Advertisement",
    categoryTwo: "Design",
    title: "Fintech Payment Solution",
    delay: "400ms",
    columnClass: "col-xl-4 col-md-6",
  },
  {
    id: 3,
    image: "/assets/images/resource/project2-3.jpg",
    category: "Digital Painting",
    categoryTwo: "App Design",
    title: "Fintech Payment Solution",
    delay: "600ms",
    columnClass: "col-xl-4 col-md-6",
  },
  {
    id: 4,
    image: "/assets/images/resource/project2-4.jpg",
    category: "Web Development",
    categoryTwo: "Design",
    title: "Fintech Payment Solution",
    delay: "800ms",
    columnClass: "col-xl-4 col-md-6",
  },
  {
    id: 5,
    image: "/assets/images/resource/project2-5.jpg",
    category: "Digital Research",
    categoryTwo: "Branding",
    title: "Fintech Payment Solution",
    delay: "1000ms",
    columnClass: "col-xl-8",
  },
];

export default function ProjectsSectionTwo() {
  return (
    <section className="projects-section-two">
      <div className="auto-container">
        <div className="row gx-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-block-two ${project.columnClass} wow fadeInUp`}
              data-wow-delay={project.delay}
            >
              <div className="inner-block">
                <div className="image">
                  <img src={project.image} alt={project.title} />
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="content">
                  <div className="cat">
                    {project.category}
                    <span></span>
                    {project.categoryTwo}
                  </div>

                  <div className="h4 title">
                    <Link href="/page-project-details">
                      {project.title}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}