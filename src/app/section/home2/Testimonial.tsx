"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Emily Carter",
    role: "Senior Project Manager",
    text: "The team handled every piece of furniture with care and attention. They were punctual, friendly, and made the whole move effortless",
    img: "/assets/images/resource/testi2-1.jpg",
  },
  {
    name: "Bessie Cooper",
    role: "Senior Project Manager",
    text: "The team handled every piece of furniture with care and attention. They were punctual, friendly, and made the whole move effortless",
    img: "/assets/images/resource/testi2-2.jpg",
  },
  {
    name: "David Smith",
    role: "Senior Project Manager",
    text: "The team handled every piece of furniture with care and attention. They were punctual, friendly, and made the whole move effortless",
    img: "/assets/images/resource/testi2-3.jpg",
  },
    {
    name: "Emily Carter",
    role: "Senior Project Manager",
    text: "The team handled every piece of furniture with care and attention. They were punctual, friendly, and made the whole move effortless",
    img: "/assets/images/resource/testi2-1.jpg",
  },
  {
    name: "Bessie Cooper",
    role: "Senior Project Manager",
    text: "The team handled every piece of furniture with care and attention. They were punctual, friendly, and made the whole move effortless",
    img: "/assets/images/resource/testi2-2.jpg",
  },
];

export default function TestimonialSectionTwo() {
  return (
    <section className="testimonial-section-two">
      <div className="auto-container">

        {/* Title */}
        <div className="sec-title-box">
          <div className="sec-title">
            <div className="h6 sub-title">Testimonial</div>
            <div className="h2 title char-animation">
              What Our Happy Clients Say About Us.
            </div>
          </div>

          {/* Navigation */}
          <div className="arrow-box">
            <div className="testi-two_button-prev">
              <img src="/assets/images/icons/arrow2.png" alt="" />
            </div>
            <div className="testi-two_button-next">
              <img src="/assets/images/icons/arrow2.png" alt="" />
            </div>
          </div>
        </div>

      </div>

      {/* Slider */}
      <div className="outer-container">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".testi-two_button-next",
            prevEl: ".testi-two_button-prev",
          }}
          spaceBetween={30}
          slidesPerView={3}
          className="testi-two_swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-block">
                <div className="inner-block">

                  <div className="image-box">
                    <div className="image">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="icon">
                      <img src="/assets/images/icons/testi2-1.png" alt="" />
                    </div>
                  </div>

                  <div className="text">
                    “{item.text}”
                  </div>

                  <div className="info-box">
                    <div className="author-info">
                      <div className="h5 name">{item.name}</div>
                      <div className="designation">{item.role}</div>
                    </div>

                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}