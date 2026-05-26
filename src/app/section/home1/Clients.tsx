"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clients = [
  {
    hover: "/assets/images/resource/client1-2.png",
    normal: "/assets/images/resource/client1-1.png",
  },
  {
    hover: "/assets/images/resource/client2-2.png",
    normal: "/assets/images/resource/client2-1.png",
  },
  {
    hover: "/assets/images/resource/client3-2.png",
    normal: "/assets/images/resource/client3-1.png",
  },
  {
    hover: "/assets/images/resource/client4-2.png",
    normal: "/assets/images/resource/client4-1.png",
  },
  {
    hover: "/assets/images/resource/client5-2.png",
    normal: "/assets/images/resource/client5-1.png",
  },
];

const ClientsSection = () => {
  return (
    <section className="clients-section pt-0">
      <div className="auto-container overflow-hidden">
        <div
          className="outer-box wow fadeInUp"
          data-wow-delay="400ms">
          <div className="swiper-container">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={5}
              spaceBetween={30}
              loop={true}
              speed={1200}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
              className="clients-swiper-one pb-0">
              {[...clients, ...clients].map((client, index) => (
                <SwiperSlide key={index}>
                  <div className="client-block">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <img
                            src={client.hover}
                            alt="Client Logo"/>
                          <img
                            src={client.normal}
                            alt="Client Logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;