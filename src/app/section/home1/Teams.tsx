"use client";
import Link from "next/link";
import React from "react";

const teamMembers = [
  {
    name: "Jenny Wilson",
    designation: "Developer",
    image: "/assets/images/resource/team1-1.jpg",
    delay: "200ms",
  },
  {
    name: "Kristin Watson",
    designation: "Developer",
    image: "/assets/images/resource/team1-2.jpg",
    delay: "400ms",
  },
  {
    name: "Bessie Cooper",
    designation: "Designer",
    image: "/assets/images/resource/team1-3.jpg",
    delay: "600ms",
  },
  {
    name: "John Smith",
    designation: "Graphic Designer",
    image: "/assets/images/resource/team1-4.jpg",
    delay: "800ms",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="outer-box position-relative">
        <div className="bg-image">
          <img
            src="/assets/images/background/team1-1-bg.png"
            alt="background"
          />
        </div>
        <div className="shape-1 bounce-x">
          <img
            src="/assets/images/icons/shape-10.png"
            alt="shape"
          />
        </div>

        <div className="shape-2 bounce-x">
          <img
            src="/assets/images/icons/shape-11.png"
            alt="shape"
          />
        </div>
        <div className="shape-3">
          <img
            src="/assets/images/icons/shape-12.png"
            alt="shape"
          />
        </div>
        <div className="auto-container">
          <div className="sec-title text-center light">
            <div className="h6 sub-title">Our Team</div>
            <h2 className="title">
              Meet Our Experienced Team People
            </h2>
          </div>
          <div className="row gx-4">
            {teamMembers.map((member, index) => (
              <div
                className="team-block col-xl-3 col-md-6 wow fadeInUp"
                data-wow-delay={member.delay}
                key={index}>
                <div className="inner-block">
                  <div className="images-box">
                    <div className="image">
                      <img
                        src={member.image}
                        alt={member.name}
                      />
                      <img
                        src={member.image}
                        alt={member.name}
                      />
                    </div>
                  </div>

                  <div className="author-info">
                    <h4 className="name">
                      <Link href="/page-team">
                        {member.name}
                      </Link>
                    </h4>

                    <div className="designation">
                      {member.designation}
                    </div>

                    <ul className="social-icon">
                      <li>
                        <Link href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          <i className="fa-brands fa-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;