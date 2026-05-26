"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "What is business consulting?",
    answer:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the",
  },
  {
    question: "What do business consultants do?",
    answer:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the",
  },
  {
    question: "Why do companies hire business consultants?",
    answer:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the",
  },
  {
    question: "Do you support sustainability initiatives?",
    answer:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section pb-0">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-6">
            <div
              className="inner-column wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="sec-title">
                <div className="h6 sub-title">FAQ</div>

                <h2 className="title char-animation">
                  Frequently Asked Questions?
                </h2>
              </div>

              <div className="faq-box">
                <div className="inner-box">
                  <ul className="accordion-box">
                    {faqData.map((item, index) => (
                      <li
                        className={`accordion block ${
                          activeIndex === index ? "active-block" : ""
                        }`}
                        key={index}
                      >
                        <div
                          className={`acc-btn ${
                            activeIndex === index ? "active" : ""
                          }`}
                          onClick={() => toggleAccordion(index)}
                          style={{ cursor: "pointer" }}
                        >
                          <i className="icon fa-solid fa-plus"></i>
                          {item.question}
                        </div>

                        <div
                          className={`acc-content ${
                            activeIndex === index ? "current" : ""
                          }`}
                          style={{
                            display:
                              activeIndex === index ? "block" : "none",
                          }}
                        >
                          <div className="content">
                            <div className="text">{item.answer}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-lg-6">
            <div
              className="inner-column wow fadeInUp position-relative"
              data-wow-delay="400ms">
              <div className="shape-1 bounce-x">
                <img
                  src="/assets/images/icons/shape-13.png"
                  alt="shape"
                />
              </div>
              <div className="shape-2 animate-circle">
                <img
                  src="/assets/images/icons/shape-14.png"
                  alt="shape"
                />
              </div>
              <div className="shape-3 bounce-x">
                <img
                  src="/assets/images/icons/shape-15.png"
                  alt="shape"
                />
              </div>
              <div className="shape-4">
                <img
                  src="/assets/images/icons/shape-16.png"
                  alt="shape"
                />
              </div>
              <div className="shape-5">
                <img
                  src="/assets/images/icons/shape-17.png"
                  alt="shape"
                />
              </div>
              <div className="shape-6">
                <img
                  src="/assets/images/icons/shape-18.png"
                  alt="shape"
                />
              </div>

              {/* Main Image */}
              <div className="image">
                <img
                  src="/assets/images/resource/faq1-1.png"
                  alt="FAQ"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;