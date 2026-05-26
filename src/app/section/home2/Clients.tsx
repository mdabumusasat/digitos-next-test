"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clients = [
  {
    img1: "/assets/images/resource/client1-2.png",
    img2: "/assets/images/resource/client1-1.png",
  },
  {
    img1: "/assets/images/resource/client2-2.png",
    img2: "/assets/images/resource/client2-1.png",
  },
  {
    img1: "/assets/images/resource/client3-2.png",
    img2: "/assets/images/resource/client3-1.png",
  },
  {
    img1: "/assets/images/resource/client4-2.png",
    img2: "/assets/images/resource/client4-1.png",
  },
  {
    img1: "/assets/images/resource/client5-2.png",
    img2: "/assets/images/resource/client5-1.png",
  },
  {
    img1: "/assets/images/resource/client2-2.png",
    img2: "/assets/images/resource/client2-1.png",
  },
  {
    img1: "/assets/images/resource/client3-2.png",
    img2: "/assets/images/resource/client3-1.png",
  },
];

export default function ClientsSectionTwo() {
  return (
    <section className="clients-section-two pt-0">
      <div className="auto-container overflow-hidden">
        <div className="title-box">
          <div className="h6 title">
            Trusted by <span>1200+</span> founders & business owners
          </div>
        </div>
        <div className="outer-box">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            slidesPerView={5}
            spaceBetween={40}
            breakpoints={{
              0: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
            className="clients-swiper-one">
            {clients.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="client-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src={item.img1} alt="" />
                        <img src={item.img2} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}