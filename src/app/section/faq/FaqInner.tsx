"use client";

import React, { useState } from "react";

export default function FaqSection() {
  const faqs = [
    {
      question: "01. How far in advance should I schedule my move?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.",
    },
    {
      question:
        "02. What's the difference between a binding and non-binding estimate?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.",
    },
    {
      question:
        "03. Do movers need to do an in-person survey to give an estimate?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.",
    },
    {
      question:
        "04. What happens if my new home isn't ready on moving day?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.",
    },
    {
      question:
        "05. What should I do if my belongings are damaged or lost?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faqs-section pt-120 pb-120">
      <div className="outer-box">
                <div className="auto-container">
          <div className="row gx-3">
            <div className="faq-column col-xl-10 offset-xl-1">
            <div className="accordion-style1">
              <ul className="accordion-box denge-fade">
                {faqs.map((faq, index) => (
                  <li
                    key={index}
                    className={`accordion block ${
                      activeIndex === index ? "active-block" : ""
                    }`}
                  >
                    <div
                      className={`acc-btn ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => toggleAccordion(index)}
                      style={{ cursor: "pointer" }}
                    >
                      {faq.question}
                      <div className="icon fal fa-plus"></div>
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
                        <div className="text">{faq.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}