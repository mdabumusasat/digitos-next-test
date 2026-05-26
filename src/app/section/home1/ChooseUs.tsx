"use client";
import React from "react";
import CounterUp from "../../components/elements/CounterUp";

const chooseData = [
  {
    icon: "/assets/images/icons/wcu1-1.png",
    title: "Strategy-driven design, not visuals",
    text: "It is a long established fact that a reader will be distracted",
  },
  {
    icon: "/assets/images/icons/wcu1-2.png",
    title: "Clear communication & transparency",
    text: "It is a long established fact that a reader will be distracted",
  },
  {
    icon: "/assets/images/icons/wcu1-3.png",
    title: "Long-term support and optimization",
    text: "It is a long established fact that a reader will be distracted",
    styleTwo: true,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us-section">
      <div className="outer-box position-relative">
        <div className="shape-1 bounce-y">
          <img
            src="/assets/images/icons/shape-6.png"
            alt="shape"
          />
        </div>

        <div className="shape-2">
          <img
            src="/assets/images/icons/shape-7.png"
            alt="shape"
          />
        </div>

        <div className="shape-3 animate-circle">
          <img
            src="/assets/images/icons/shape-8.png"
            alt="shape"
          />
        </div>

        <div className="auto-container">
          <div className="row">
            <div className="image-column col-xl-6 col-lg-10">
              <div
                className="inner-column wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="image">
                  <img
                    src="/assets/images/resource/wcu1-1.jpg"
                    alt="why choose us"
                  />
                </div>

                <div className="funfact-box">
                  <div className="count-box">
                    <CounterUp end={98} />
                    %
                  </div>
                  <div className="text">
                    Clients Satisfied <br />
                    and Repeating
                  </div>
                </div>
              </div>
            </div>
            <div className="content-column col-xl-6 col-lg-10">
              <div
                className="inner-column wow fadeInUp"
                data-wow-delay="400ms">
                <div className="sec-title light">
                  <div className="h6 sub-title">why choose us</div>

                  <h2 className="title char-animation">
                    Why Leading Brands Trust Us to Build Their Digital Success
                  </h2>
                  <div className="text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    moreIt is
                  </div>
                </div>

                <div className="content-box">
                  {chooseData.map((item, index) => (
                    <div
                      className="why-choose-us-block"
                      key={index}
                    >
                      <div
                        className={`inner-block ${
                          item.styleTwo ? "style-two" : ""
                        }`}>
                        <div className="icon">
                          <img
                            src={item.icon}
                            alt={item.title}
                          />
                        </div>
                        <div className="content">
                          <h5 className="title">{item.title}</h5>
                          <div className="text">{item.text}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;