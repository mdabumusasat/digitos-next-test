"use client";
import React from "react";
import Link from "next/link";

const BlogDetails = () => {
  return (
        <section className="blog-details pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="blog-details__left">
                  <div className="blog-details__img">
                    <img src="/assets/images/resource/news-details.jpg" alt=""/>
                    <div className="blog-details__date">
                      <span className="day">28</span>
                      <span className="month">Aug</span>
                    </div>
                  </div>
                  <div className="blog-details__content">
                    <ul className="list-unstyled blog-details__meta">
                      <li><Link href="/news-details"><i className="fas fa-user-circle"></i> Admin</Link> </li>
                      <li><Link href="/news-details"><i className="fas fa-comments"></i> 02 Comments</Link></li>
                    </ul>
                    <div className="h3 blog-details__title">UX Mistakes That Are Killing Your Conversions</div>
                    <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p>
                    <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p>
                    <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p>
                  </div>
                  <div className="blog-details__bottom">
                    <p className="blog-details__tags"> <span>Tags</span> <Link href="/news-details">Business</Link> <Link href="/news-details">Agency</Link> </p>
                    <div className="blog-details__social-list">
                      <Link href="/news-details"><i className="fab fa-twitter"></i></Link>
                      <Link href="/news-details"><i className="fab fa-facebook"></i></Link>
                      <Link href="/news-details"><i className="fab fa-pinterest-p"></i></Link>
                      <Link href="/news-details"><i className="fab fa-instagram"></i></Link>
                    </div>
                  </div>
                  <div className="nav-links">
                    <div className="prev"><Link href="/news-details" rel="prev">Bring to the table win-win survival strategies</Link></div>
                    <div className="next"><Link href="/news-details" rel="next">How to lead a healthy &amp; well-balanced life</Link></div>
                  </div>
                  <div className="comment-one">
                    <div className="h3 comment-one__title">2 Comments</div>
                    <div className="comment-one__single">
                      <div className="comment-one__image"> <img src="/assets/images/resource/client-3.jpg" alt=""/> </div>
                      <div className="comment-one__content">
                        <div className="h3">Kevin Martin</div>
                        <div className="text">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.</div>
                        <Link href="/news-details" className="btn-style-one comment-one__btn">Reply</Link>
                      </div>
                    </div>
                    <div className="comment-one__single">
                      <div className="comment-one__image"> <img src="/assets/images/resource/client-2.jpg" alt=""/> </div>
                      <div className="comment-one__content">
                        <div className="h3">Sarah Albert</div>
                        <div className="text">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.</div>
                        <Link href="/news-details" className="btn-style-one comment-one__btn">Reply</Link>
                      </div>
                    </div>
                    <div className="comment-form">
                      <div className="h3 comment-form__title mb-20">Leave a Comment</div>
                      <form id="contact_form">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="mb-3">
                              <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="mb-3">
                              <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <textarea name="form_message" className="form-control required" rows={5} placeholder="Enter Message"></textarea>
                        </div>
                        <div className="mb-3">
                          <input name="form_botcheck" className="form-control" type="hidden" />
                          <button type="submit" className="theme-btn btn-style-three" data-loading-text="Please wait..."><span className="btn-title">Submit Comment</span></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="sidebar">
                  <div className="sidebar__single sidebar__search">
                    <form action="#" className="sidebar__search-form">
                      <input type="search" placeholder="Search here"/>
                      <button type="submit"><i className="lnr-icon-search"></i></button>
                    </form>
                  </div>
                  <div className="sidebar__single sidebar__post">
                    <div className="h3 sidebar__title">Latest Posts</div>
                    <ul className="sidebar__post-list list-unstyled">
                      <li>
                        <div className="sidebar__post-image"> <img src="/assets/images/resource/blog1-1.jpg" alt=""/> </div>
                        <div className="sidebar__post-content">
                          <div className="h3"> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i>Admin</span> <Link href="/news-details">How We Scaled a Startup to 1M Users in 6 Months</Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar__post-image"> <img src="/assets/images/resource/blog1-2.jpg" alt=""/> </div>
                        <div className="sidebar__post-content">
                          <div className="h3"> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i>Admin</span> <Link href="/news-details">The Future of AI in Digital Marketing</Link> </div>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar__post-image"> <img src="/assets/images/resource/blog1-3.jpg" alt=""/> </div>
                        <div className="sidebar__post-content">
                          <div className="h3"> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i>Admin</span> <Link href="/news-details">10 Conversion Hacks That Instantly Boost Sales</Link> </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar__single sidebar__category">
                    <div className="h3 sidebar__title">Categories</div>
                    <ul className="sidebar__category-list list-unstyled">
                      <li><Link href="/news-details">Marketing Strategy<span className="fal fa-arrow-right"></span></Link> </li>
                      <li className="active"><Link href="/news-details">Web Development<span className="fal fa-arrow-right"></span></Link></li>
                      <li><Link href="/news-details">Design & Branding<span className="fal fa-arrow-right"></span></Link> </li>
                      <li><Link href="/news-details">SEO & Analytics<span className="fal fa-arrow-right"></span></Link> </li>
                      <li><Link href="/news-details">Social Media<span className="fal fa-arrow-right"></span></Link> </li>
                      <li><Link href="/news-details">Case Studies<span className="fal fa-arrow-right"></span></Link> </li>
                    </ul>
                  </div>
                  <div className="sidebar__single sidebar__tags">
                    <div className="h3 sidebar__title">Tags</div>
                    <div className="sidebar__tags-list"> <Link href="#">Marketing</Link> <Link href="#">Branding</Link> <Link href="#">Strategy</Link> <Link href="#">Optimization</Link> <Link href="#">Startups</Link> <Link href="#">Analytics</Link> </div>
                  </div>
                  <div className="sidebar__single sidebar__comments">
                    <div className="h3 sidebar__title">Recent Comments</div>
                    <ul className="sidebar__comments-list list-unstyled">
                      <li>
                        <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                        <div className="sidebar__comments-text-box"><p>A wordpress commenter on <br /> launch new mobile app</p></div>
                      </li>
                      <li>
                        <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                        <div className="sidebar__comments-text-box">
                          <p> <span>John Doe</span> on template:</p>
                          <div className="h5">comments</div>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                        <div className="sidebar__comments-text-box"><p>A wordpress commenter on <br /> launch new mobile app</p></div>
                      </li>
                      <li>
                        <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                        <div className="sidebar__comments-text-box">
                          <p> <span>John Doe</span> on template:</p>
                          <div className="h5">comments</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default BlogDetails;