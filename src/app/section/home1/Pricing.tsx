"use client";
import React, { useState } from "react";
import Link from "next/link";

const monthlyPlans = [
  {
    badge: "Save 35%",
    icon: "/assets/images/icons/price1-1.png",
    title: "Starter Plan",
    desc: "Perfect for small businesses and startups",
    price: "$399",
    period: "/per month",
  },
  {
    badge: "Save 35%",
    icon: "/assets/images/icons/price1-2.png",
    title: "Growth Package",
    desc: "Perfect for brands ready to grow",
    price: "$1,999",
    period: "/per month",
    active: true,
  },
  {
    badge: "Save 35%",
    icon: "/assets/images/icons/price1-3.png",
    title: "Premium Package",
    desc: "For a complete digital experience",
    price: "$3,999",
    period: "/per month",
  },
];

const yearlyPlans = [
  {
    badge: "Save 45%",
    icon: "/assets/images/icons/price1-1.png",
    title: "Starter Plan",
    desc: "Perfect for small businesses and startups",
    price: "$4,700",
    period: "/per year",
  },
  {
    badge: "Save 45%",
    icon: "/assets/images/icons/price1-2.png",
    title: "Growth Package",
    desc: "Perfect for brands ready to grow",
    price: "$23,999",
    period: "/per year",
    active: true,
  },
  {
    badge: "Save 45%",
    icon: "/assets/images/icons/price1-3.png",
    title: "Premium Package",
    desc: "For a complete digital experience",
    price: "$35,999",
    period: "/per year",
  },
];

const PricingSection = () => {
  const [tab, setTab] = useState("monthly");

  const plans = tab === "monthly" ? monthlyPlans : yearlyPlans;

  return (
    <section className="pricing-section">
      <div className="shape-1 bounce-y">
        <img src="/assets/images/icons/shape-19.png" alt="" />
      </div>
      <div className="shape-2 bounce-y">
        <img src="/assets/images/icons/shape-20.png" alt="" />
      </div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="h6 sub-title">Pricing Plan</div>
          <h2 className="h2 title char-animation">
            Our Popular Pricing Plan by Company
          </h2>
        </div>
        <div className="default-tabs tabs-box mb-0">
          <div className="tab-btns tab-buttons">
            <button
              onClick={() => setTab("monthly")}
              className={`tab-btn one ${tab === "monthly" ? "active-btn" : ""}`}>
              Monthly
            </button>
            <span></span>
            <button
              onClick={() => setTab("yearly")}
              className={`tab-btn ${tab === "yearly" ? "active-btn" : ""}`}>
              Yearly
            </button>
          </div>
          <div className="tabs-content">
            <div className="tab-inner-content">
              <div className="row gx-4">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className="pricing-block col-xl-4 col-md-6">
                    <div className={`inner-block ${plan.active ? "active" : ""}`}>
                      <div className="cat">{plan.badge}</div>
                      <img
                        src={plan.icon}
                        alt={plan.title}
                        className="icon-one"
                      />
                      <h4 className="h4 title">{plan.title}</h4>
                      <div className="text">{plan.desc}</div>
                      <div className="price-box">
                        <div className="price">
                          {plan.price}
                          <span>{plan.period}</span>
                        </div>
                      </div>
                      <ul className="list-style-one">
                        <li>
                          <i className="icon fa-solid fa-check"></i>
                          <span>Business Consultation</span>
                        </li>
                        <li>
                            <i className="icon fa-solid fa-check"></i> 
                            <span>Up to 10 Support Hours/Month</span>
                        </li>
                        <li>
                            <i className="icon fa-solid fa-check"></i> 
                            <span>Network Monitoring</span>
                        </li>
                        <li>
                            <i className="icon fa-solid fa-check"></i> 
                            <span>Email & Software Setup</span>
                        </li>
                      </ul>
                      <Link
                        href="/page-pricing"
                        className="theme-btn btn-style-four w-100">
                        Choose a Plan
                        <span><img src="/assets/images/icons/arrow.png" alt=""/></span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;