"use client";
import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    title: "How far in advance should I schedule my move?",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more natural-looking distribution.",
  },
  {
    id: 2,
    title:
      "What's the difference between a binding and non-binding estimate?",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more natural-looking distribution.",
  },
  {
    id: 3,
    title:
      "Do movers need to do an in-person survey to give an estimate?",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more natural-looking distribution.",
  },
  {
    id: 4,
    title:
      "What happens if my new home isn't ready on moving day?",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more natural-looking distribution.",
  },
  {
    id: 5,
    title:
      "What should I do if my belongings are damaged or lost?",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more natural-looking distribution.",
  },
];

export default function FAQSectionTwo() {
  // Default open = 2 (like your HTML)
  const [activeId, setActiveId] = useState<number | null>(2);

  const toggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section-two">
      <div className="outer-box">

        <div className="bg-image">
          <img src="/assets/images/background/faq2-1.png" alt="" />
        </div>

        <div className="auto-container">

          <div className="sec-title text-center light">
            <div className="h6 sub-title">Faqs</div>
            <div className="h2 title char-animation">
              Have Questions in Your Mind? Get the Answers Now
            </div>
          </div>

          <div className="row gx-3">
            <div className="faq-column col-xl-10 offset-xl-1">
              <div className="inner-column">
                <div className="faq-box">
                  <div className="inner-box">

                    <ul className="accordion-box">

                      {faqs.map((faq, index) => {
                        const isActive = activeId === faq.id;

                        return (
                          <li
                            key={faq.id}
                            className={`accordion block ${
                              isActive ? "active-block" : ""
                            }`}
                          >
                            <div
                              className={`acc-btn ${
                                isActive ? "active" : ""
                              }`}
                              onClick={() => toggle(faq.id)}
                            >
                              <span>{String(index + 1).padStart(2, "0")}</span>
                              {faq.title}
                              <i className="icon fa-solid fa-plus"></i>
                            </div>

                            <div
                              className={`acc-content ${
                                isActive ? "current" : ""
                              }`}
                              style={{
                                maxHeight: isActive ? "500px" : "0px",
                                overflow: "hidden",
                                transition: "all 0.35s ease",
                              }}
                            >
                              <div className="content">
                                <div className="text">{faq.content}</div>
                              </div>
                            </div>
                          </li>
                        );
                      })}

                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}