"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "../NavLinks";
import MobileMenu from "../MobileMenu";

interface HeaderProps {
  handleOpen: () => void;
  handleRemove: () => void;
  handleRemove2: () => void;
  scroll: boolean;
  handleToggle?: () => void;
  searchToggle?: boolean;
}

const Header2: React.FC<HeaderProps> = ({ handleOpen, handleRemove, handleRemove2, scroll }): JSX.Element => {
    const [isSearchActive, setIsSearchActive] = useState(false);

    const handleToggle = () => {
      setIsSearchActive(!isSearchActive);
    };
  return (
    <>
    <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""}`}>
      <div className="outer-box">
        <div className="header-upper">
          <div className="inner-box">
            <div className="info-box">
              <div className="info">
                <i className="icon fa-regular fa-location-dot"></i>
                <span>1901 Thornridge Cir. Shiloh, Hawaii 81063</span>
              </div>
              <div className="info">
                <i className="icon fa-solid fa-envelope"></i>
                <span>Support@gmail.com</span>
              </div>
            </div>
            <div className="info-box">
              <div className="info">
                <i className="icon fa-solid fa-clock"></i>
                <span>Mon - Fri:  9.00 am - 8.00pm </span>
              </div>
            </div>
          </div>
        </div>
        <div className="header-lower wow fadeInUp" data-wow-delay="400ms">
          <div className="inner-container">
            <div className="left-box">
              <div className="main-box">
                <div className="logo-box">
                  <div className="logo">
                    <Link href="/"><img src="/assets/images/logo.png" alt="Logo" /></Link>
                  </div>
                </div>
              </div>
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <NavLinks extraClassName="main-menu-list" />
                </nav>
              </div>
            </div>
            <div className="right-box">
              <Link href="#" className="header-phone_box">
                <span className="icon"><i aria-hidden="true" className="fas fa-phone-alt"></i></span>
                <span className="info">
                  Call to Anytime
                  <strong>+92 3800 8060</strong>
                </span>
              </Link>
              <Link href="/page-contact" className="theme-btn btn-style-two">Let’s Talk</Link>
              <div className="mobile-nav-toggler" onClick={handleOpen}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile Menu  --> */}
      <div className="mobile-menu">
        <div className="menu-backdrop"  onClick={() => { handleRemove(); handleRemove2(); }} />
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link href="/"><img src="/assets/images/logo.png" alt="" /></Link>
            </div>
            <div className="close-btn" onClick={() => { handleRemove(); handleRemove2(); }}><i className="icon fa fa-times"></i></div>
          </div>
          <ul className="navigation clearfix">
            <MobileMenu />
          </ul>
          <ul className="contact-list-one">
            <li>
              <i className="icon fa-regular fa-envelope"></i>
              <span className="title">Send Email</span>
              <div className="text"><Link href="#">needhelp@company.com</Link></div>
            </li>
          </ul>
          <ul className="social-links">
            <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
            <li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
            <li><Link href="#"><i className="icon fab fa-pinterest-p"></i></Link></li>
            <li><Link href="#"><i className="icon fab fa-vimeo-v"></i></Link></li>
          </ul>
        </nav>
      </div>
      {/* <!-- End Mobile Menu --> */}

      {/* <!-- Header Search --> */}
      <div className={`search-popup ${isSearchActive ? "active" : ""}`}>
        <span className="search-back-drop" onClick={handleToggle} />
        <button className="close-search" onClick={handleToggle}><span className="fa fa-times"></span></button>
        <div className="search-inner">
          <form action="#">
            <div className="form-group">
              <input type="search" name="search-field" placeholder="Search..." />
              <button type="submit"><i className="fa fa-search"></i></button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- End Header Search --> */}

      {/* <!-- Sticky Header  --> */}
      <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
        <div className="auto-container">
          <div className="inner-container">
            {/* <!--Logo--> */}
            <div className="logo">
              <Link href="#"><img src="/assets/images/logo2.png" alt=""/></Link>
            </div>

            {/* <!--Right Col--> */}
            <div className="nav-outer">
              {/* <!-- Main Menu --> */}
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix">
                    <NavLinks extraClassName="main-menu-list" />
                  </ul>
                </div>
              </nav>
              {/* <!-- Main Menu End--> */}

              {/* <!--Mobile Navigation Toggler--> */}
              <div className="mobile-nav-toggler" onClick={handleOpen}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <Link href="/" className="header-phone_box">
              <span className="icon"><i aria-hidden="true" className="fas fa-phone-alt"></i></span>
              <span className="info">
                Call Anytime
                <strong>+8801750050088</strong>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header2;