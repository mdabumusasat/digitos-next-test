"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const testimonials = [
  {
    id: 1,
    name: "David Smith",
    role: "Managing Director",
    image: "/assets/images/resource/testi-h1-1.jpg",
    thumb: "/assets/images/resource/thumb-1-1.jpg",
    smallThumb: "/assets/images/resource/thumb-1-2.jpg",
    text: "I recently worked with Digitos for my home renovation project, and I couldn't be happier with the results. From the moment I walked into their showroom, I was impressed by the extensive selection of high-quality.",
  },
  {
    id: 2,
    name: "Christine Eve",
    role: "Managing Director",
    image: "/assets/images/resource/testi-h1-2.jpg",
    thumb: "/assets/images/resource/thumb-1-1.jpg",
    smallThumb: "/assets/images/resource/thumb-1-2.jpg",
    text: "The team was professional, responsive, and incredibly easy to work with. Every detail was handled carefully, and the final outcome exceeded my expectations completely.",
  },
    {
    id: 3,
    name: "David Smith",
    role: "Managing Director",
    image: "/assets/images/resource/testi-h1-1.jpg",
    thumb: "/assets/images/resource/thumb-1-1.jpg",
    smallThumb: "/assets/images/resource/thumb-1-2.jpg",
    text: "I recently worked with Digitos for my home renovation project, and I couldn't be happier with the results. From the moment I walked into their showroom, I was impressed by the extensive selection of high-quality.",
  },
];

export default function TestimonialSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="testimonial-section pb-0">
      <div className="auto-container">
        <div className="sec-title-box wow fadeInUp" data-wow-delay="200ms">
          <div className="sec-title">
            <div className="h6 sub-title">Testimonial</div>
            <h2 className="h2 title char-animation">
              What Our Happy Clients Say About Us.
            </h2>
          </div>
          <div className="text">
            Our SEO services aim to optimize operations and strategies, driving growth success.
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div
              className="ks-testimonial-wrap wow fadeInUp"
              data-wow-delay="400ms">
              <div className="ks-testimonial-item d-flex">
                <img
                className="ks-testimonial-shape-1"
                src="/assets/images/icons/testimonial-1-1.png"
                alt=""/>
                {/* Main Slider */}
                <div className="swiper ks-testimonial-active pb-0">
                  <Swiper
                    modules={[Navigation, Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    navigation={{
                      nextEl: ".arrow-next",
                      prevEl: ".arrow-prev",
                    }}
                    spaceBetween={30}
                    className="pb-0"
                  >
                    {testimonials.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="ks-testimonial-content">
                          <span className="quote d-block">
                            <img
                              src="/assets/images/icons/quote.png"
                              alt=""
                            />
                          </span>

                          <div className="ratting">
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className="fa-solid fa-star"
                              ></i>
                            ))}
                          </div>

                          <p>
                            {item.text}
                          </p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Right Image */}
                <div className="ks-testimonial-thumb">
                  <img
                    src="/assets/images/resource/thumb-1-1.jpg"
                    alt=""
                  />

                  <div className="ks-testimonial-thumb-sm">
                    <img
                      src="/assets/images/resource/thumb-1-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="ks-testimonial-bottom">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6">
                    <Swiper
                      modules={[Thumbs]}
                      onSwiper={setThumbsSwiper}
                      slidesPerView={1}
                      watchSlidesProgress
                      className="ks-testi-author-active pb-0">
                      {testimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="ks-testimonial-user-wrap d-flex align-items-center">
                            <div className="thumb">
                              <img src={item.image} alt={item.name} />
                            </div>

                            <div className="ks-testimonial-user-info">
                              <div className="h4 title">
                                {item.name}
                              </div>
                              <span>{item.role}</span>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="col-lg-6 col-xl-7 col-md-5 col-sm-6">
                    <div className="ks-testimonial-navigation align-items-center">
                      <button className="arrow-prev">
                        <i className="fa-solid fa-arrow-left"></i>
                      </button>
                      <button className="arrow-next">
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
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