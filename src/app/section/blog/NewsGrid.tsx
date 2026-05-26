"use client";
import React from "react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    image: "/assets/images/resource/blog1-1.jpg",
    date: "20",
    title: "Designing User Experiences That Actually Convert",
    delay: "200ms",
  },
  {
    id: 2,
    image: "/assets/images/resource/blog1-2.jpg",
    date: "03",
    title: "Why Your Brand Needs a Strong Online Presence",
    delay: "400ms",
  },
  {
    id: 3,
    image: "/assets/images/resource/blog1-3.jpg",
    date: "05",
    title: "Brand Identity Essentials for Digital Businesses",
    delay: "600ms",
  },
  {
    id: 4,
    image: "/assets/images/resource/blog1-3.jpg",
    date: "05",
    title: "Brand Identity Essentials for Digital Businesses",
    delay: "600ms",
  },
  {
    id: 5,
    image: "/assets/images/resource/blog1-2.jpg",
    date: "03",
    title: "Why Your Brand Needs a Strong Online Presence",
    delay: "400ms",
  },
  {
    id: 6,
    image: "/assets/images/resource/blog1-1.jpg",
    date: "20",
    title: "Designing User Experiences That Actually Convert",
    delay: "200ms",
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="auto-container">
        <div className="row gx-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="blog-block col-xl-4 col-md-6 wow fadeInUp"
              data-wow-delay={blog.delay}>
              <div className="inner-block">
                <div className="image-box">
                  <div className="image">
                    <img src={blog.image} alt={blog.title} />
                    <img src={blog.image} alt={blog.title} />
                  </div>
                  <div className="date">{blog.date}</div>
                </div>
                <div className="content-box">
                  <div className="inner-box">
                    <div className="sub-title">
                      Digital Agency
                    </div>
                    <div className="h4 title">
                      <Link href="/news-details">
                        {blog.title}
                      </Link>
                    </div>
                    <Link
                      href="/news-details"
                      className="btn-more">
                      Read More
                      <span>
                        <img
                          src="/assets/images/icons/arrow2.png"
                          alt=""
                        />
                      </span>
                    </Link>
                    <div className="time-text">
                      3 Mins to Read
                    </div>
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