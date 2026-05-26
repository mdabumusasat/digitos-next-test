"use client";
import React from "react";
import Link from "next/link";

const blogs = [
  {
    date: "20",
    category: "Digital Agency",
    title: "Designing User Experiences That Actually Convert",
    image: "/assets/images/resource/blog1-1.jpg",
    readTime: "3 Mins to Read",
    delay: "200ms",
  },
  {
    date: "03",
    category: "Digital Agency",
    title: "Why Your Brand Needs a Strong Online Presence",
    image: "/assets/images/resource/blog1-2.jpg",
    readTime: "3 Mins to Read",
    delay: "400ms",
  },
  {
    date: "05",
    category: "Digital Agency",
    title: "Brand Identity Essentials for Digital Businesses",
    image: "/assets/images/resource/blog1-3.jpg",
    readTime: "3 Mins to Read",
    delay: "600ms",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="shape-1 bounce-x">
        <img
          src="/assets/images/icons/shape-21.png"
          alt="shape"
        />
      </div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="h6 sub-title">Our Blog</div>
          <h2 className="h2 title char-animation">
            Check Out Latest News Update & Articles
          </h2>
        </div>
        <div className="row gx-4">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="blog-block col-xl-4 col-md-6 wow fadeInUp"
              data-wow-delay={blog.delay}>
              <div className="inner-block">
                <div className="image-box">
                  <div className="image">
                    <img
                      src={blog.image}
                      alt={blog.title}
                    />
                    <img
                      src={blog.image}
                      alt={blog.title}
                    />
                  </div>
                  <div className="date">{blog.date}</div>
                </div>
                <div className="content-box">
                  <div className="inner-box">
                    <div className="sub-title">
                      {blog.category}
                    </div>
                    <h4 className="h4 title">
                      <Link href="/news-grid">{blog.title}</Link>
                    </h4>
                    <Link href="/news-details" className="btn-more">
                      Read More
                    </Link>
                    <div className="time-text">
                      {blog.readTime}
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
};

export default BlogSection;