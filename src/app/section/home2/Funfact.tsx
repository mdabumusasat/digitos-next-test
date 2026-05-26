"use client";
import React from "react";
import CounterUp from "../../components/elements/CounterUp";

const funfacts = [
  {
    number: 32,
    suffix: "K",
    title: "Projects completed",
    delay: "200ms",
  },
  {
    number: 528,
    suffix: "",
    title: "Active clients",
    delay: "400ms",
  },
  {
    number: 99,
    suffix: "%",
    title: "Cup of coffee",
    delay: "600ms",
  },
  {
    number: 25,
    suffix: "",
    title: "Professionals",
    delay: "800ms",
  },
];

export default function FunfactSectionTwo() {
  return (
    <section className="funfact-section-two pt-0">
      <div className="container">

        <div className="title-box">
          <div className="h6 title">
            Trusted by <span>1200+</span> founders & business owners
          </div>
        </div>

        <div className="inner-row">

          {funfacts.map((item, index) => (
            <div
              key={index}
              className="funfact-block wow fadeInUp"
              data-wow-delay={item.delay}
            >
              <div className="inner-block">

                <h1 className="count-box">
                  <CounterUp end={item.number} />
                  {item.suffix}
                </h1>

                <div className="text">
                  {item.title}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}