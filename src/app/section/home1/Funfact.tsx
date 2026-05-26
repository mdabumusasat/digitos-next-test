"use client";

import React from "react";
import CounterUp from "../../components/elements/CounterUp";

const funfacts = [
  {
    icon: "/assets/images/icons/funfact1-1.png",
    number: 230,
    suffix: "k",
    title: "Completed Projects",
    delay: "200ms",
  },
  {
    icon: "/assets/images/icons/funfact1-2.png",
    number: 100,
    suffix: "%",
    title: "Satisfied customers",
    delay: "400ms",
  },
  {
    icon: "/assets/images/icons/funfact1-3.png",
    number: 960,
    suffix: "k",
    title: "Seo & impressions",
    delay: "600ms",
  },
];

const FunfactSection = () => {
  return (
    <section className="funfact-section">
      <div className="outer-box">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sec-title light">
                <div className="h6 sub-title">
                  numbers don’t lie
                </div>

                <h2 className="title char-animation">
                  They Reveal the True Power of a Company
                </h2>
              </div>
            </div>

            {/* Funfacts */}
            <div className="funfact-column col-xl-6 offset-xl-2 col-lg-8">
              <div className="inner-column">
                {funfacts.map((item, index) => (
                  <div
                    className="funfact-box wow fadeInUp"
                    data-wow-delay={item.delay}
                    key={index}
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <img
                          src={item.icon}
                          alt={item.title}
                        />
                      </div>

                      <div className="content">
                        <div className="count-box">
                          <CounterUp end={item.number} />
                          {item.suffix}
                        </div>

                        <div className="text">
                          {item.title}
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

export default FunfactSection;