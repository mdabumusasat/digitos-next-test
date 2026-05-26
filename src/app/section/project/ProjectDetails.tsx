"use client";
import React from "react";
import Link from "next/link";

export default function ProjectDetailsSection() {
  return (
    <> 
	<section className="project-details pt-120">
		<div className="container">
			<div className="row">
				<div className="col-xl-12">
					<div className="project-details__top">
						<div className="project-details__img"> <img src="/assets/images/resource/project-details.jpg" alt=""/> </div>
					</div>
				</div>
			</div>
			<div className="project-details__content">
				<div className="row">
					<div className="col-xl-8 col-lg-8">
						<div className="project-details__content-left">
							<div className="h3 mb-4">Here to Know About This Project</div>
							<p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Asperiores, repellat aliquid. Est corrupti officiis dignissimos deserunt sunt minima iusto quia saepe tempora consectetur dolor deleniti voluptatum et, eos vitae pariatur molestiae odit quos enim voluptas nobis ullam voluptatem cum iste. Dolore modi, animi optio, dignissimos delectus pariatur similique harum eos. </p>
							<p className="mb-5">Beyond more stoic this along goodness hey this this
								wow manatee mongoose one as since a far flustered impressive manifest Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum illo ea ad, nam quisquam optio vel tempora, minus placeat, ut nisi quam quos laboriosam eos quibusdam cum atque suscipit quod dignissimos magni doloribus facere eius soluta possimus. Officiis, autem similique sequi labore aliquid corporis illo omnis voluptate optio possimus doloremque, error reiciendis delectus ex tempore, architecto eaque, inventore nihil pariatur quibusdam facere reprehenderit? Doloribus deleniti sapiente, dicta, dolorem unde deserunt quisquam. Dolore consequuntur reiciendis corporis perspiciatis quam fuga magnam molestiae minima culpa ab beatae vel itaque cumque et adipisci autem nisi qui esse in, deserunt numquam hic? Et, eligendi, assumen daEst corrupti officiis dignissimos.</p>
						</div>
					</div>
					<div className="col-xl-4 col-lg-4">
						<div className="project-details__content-right">
							<div className="project-details__details-box">
								<div className="project-details__bg-shape"> </div>
								<ul className="list-unstyled project-details__details-list">
									<li>
										<p className="project-details__client">Date</p>
										<div className="h4 project-details__name">10 January, 2026</div>
									</li>
									<li>
										<p className="project-details__client">Client</p>
										<div className="h4 project-details__name">Kodesolution Ltd</div>
									</li>
									<li>
										<p className="project-details__client">Website</p>
										<div className="h4 project-details__name">www.domain.com</div>
									</li>
									<li>
										<p className="project-details__client">Location</p>
										<div className="h4 project-details__name">New York, USA</div>
									</li>
									<li>
										<p className="project-details__client">Value</p>
										<div className="h4 project-details__name">$12,367</div>
									</li>
									<li>
										<div className="project-details__social"> <Link href="#"><i className="fa fa-x"></i></Link> <Link href="#"><i className="fab fa-facebook"></i></Link> <Link href="#"><i className="fab fa-pinterest-p"></i></Link> <Link href="#"><i className="fab fa-instagram"></i></Link> </div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-12">
					<div className="project-details__pagination-box">
						<ul className="project-details__pagination list-unstyled clearfix">
							<li className="next">
								<div className="icon"> <Link href="#" aria-label="Previous"><i className="far fa-arrow-left-long"></i></Link> </div>
								<div className="content">Previous</div>
							</li>
							<li className="count"><Link href="#"></Link></li>
							<li className="count"><Link href="#"></Link></li>
							<li className="count"><Link href="#"></Link></li>
							<li className="count"><Link href="#"></Link></li>
							<li className="previous">
								<div className="content">Next</div>
								<div className="icon"> <Link href="#" aria-label="Previous"><i className="far fa-arrow-right-long"></i></Link> </div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!--Project Details End--> */}

    {/* <!-- start projects-section-two --> */}
    <section className="projects-section-two">
      <div className="auto-container">
        <div className="row gx-4">
          <div className="project-block-two col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="inner-block">
              <div className="image">
                <img src="/assets/images/resource/project2-1.jpg" alt=""/>
                <img src="/assets/images/resource/project2-1.jpg" alt=""/>
              </div>
              <div className="content">
                <div className="cat">UX Research <span></span> Web App Design</div>
                <div className="h4 title"><Link href="/page-project-details">Fintech Payment Solution</Link></div>
              </div>
            </div>
          </div>
          <div className="project-block-two col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
            <div className="inner-block">
              <div className="image">
                <img src="/assets/images/resource/project2-2.jpg" alt=""/>
                <img src="/assets/images/resource/project2-2.jpg" alt=""/>
              </div>
              <div className="content">
                <div className="cat">Product Advertisement <span></span> Design</div>
                <div className="h4 title"><Link href="/page-project-details">Fintech Payment Solution</Link></div>
              </div>
            </div>
          </div>
          <div className="project-block-two col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-block">
              <div className="image">
                <img src="/assets/images/resource/project2-3.jpg" alt=""/>
                <img src="/assets/images/resource/project2-3.jpg" alt=""/>
              </div>
              <div className="content">
                <div className="cat">Digital Painting <span></span> App Design</div>
                <div className="h4 title"><Link href="/page-project-details">Fintech Payment Solution</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}