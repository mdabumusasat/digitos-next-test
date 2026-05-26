"use client";
import React, {useState} from "react";
import ModalVideo from 'react-modal-video';

export default function VideoSectionTwo() {
  const [isOpen, setOpen] = useState(false);
  return (
     <>
    <section className="video-section">
      <div className="outer-box">
        <div className="bg-image"><img src="/assets/images/resource/video2-1.jpg" alt=""/></div>
        <div className="video-box wow fadeInUp animated" data-wow-delay="200ms">
          <a className="play-now-one play-now" onClick={() => setOpen(true)} data-fancybox="gallery" data-caption="">
            <i className="fa-sharp fa-solid fa-play"></i>
            <span className="ripple"></span>
          </a>
        </div>
        <div className="h2 title wow fadeInUp animated" data-wow-delay="400ms">See How We Turn Ideas Into Impactful Digital Experiences</div>
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
}