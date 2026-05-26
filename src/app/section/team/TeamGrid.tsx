"use client";
import React from "react";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Jenny Wilson",
    designation: "Developer",
    image: "/assets/images/resource/team1-1.jpg",
    delay: "100ms",
  },
  {
    id: 2,
    name: "Kristin Watson",
    designation: "Developer",
    image: "/assets/images/resource/team1-2.jpg",
    delay: "200ms",
  },
  {
    id: 3,
    name: "Bessie Cooper",
    designation: "Designer",
    image: "/assets/images/resource/team1-3.jpg",
    delay: "300ms",
  },
  {
    id: 4,
    name: "John Smith",
    designation: "Graphic Designer",
    image: "/assets/images/resource/team1-4.jpg",
    delay: "400ms",
  },
  {
    id: 5,
    name: "John Smith",
    designation: "Graphic Designer",
    image: "/assets/images/resource/team1-4.jpg",
    delay: "500ms",
  },
  {
    id: 6,
    name: "Bessie Cooper",
    designation: "Designer",
    image: "/assets/images/resource/team1-3.jpg",
    delay: "600ms",
  },
  {
    id: 7,
    name: "Kristin Watson",
    designation: "Developer",
    image: "/assets/images/resource/team1-2.jpg",
    delay: "700ms",
  },
  {
    id: 8,
    name: "Jenny Wilson",
    designation: "Developer",
    image: "/assets/images/resource/team1-1.jpg",
    delay: "800ms",
  },
];

export default function TeamSection() {
  return (
    <section className="team-section pb-90 pt-120">
      <div className="auto-container">
        <div className="row gx-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-block col-xl-3 col-md-6 wow fadeInUp"
              data-wow-delay={member.delay}>
              <div className="inner-block">
                <div className="images-box">
                  <div className="image">
                    <img src={member.image} alt={member.name} />
                    <img src={member.image} alt={member.name} />
                  </div>
                </div>
                <div className="author-info">
                  <div className="h4 name">
                    <Link href="/page-team-details">
                      {member.name}
                    </Link>
                  </div>
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
    </section>
  );
}