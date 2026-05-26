import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home2/Banner";
import Feature from "../section/home2/Feature";
import About from "../section/home2/About";
import Service from "../section/home2/Service";
import ChooseUs from "../section/home2/ChooseUs";
import Clients from "../section/home2/Clients";
import Works from "../section/home2/Works";
import Video from "../section/home2/Video";
import Project from "../section/home2/Project";
import Faqs from "../section/home2/Faqs";
import Testimonial from "../section/home2/Testimonial";
import Funfact from "../section/home2/Funfact";
import Contact from "../section/home2/Contact";
import News from "../section/home2/News";


export const metadata = {
  title: `Home Layout2 || ${SITE_NAME}`,
};

const Home2: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper HeaderStyle="two" FooterStyle="two">
      <Banner />
      <Feature />
      <About />
      <Service />
      <ChooseUs />
      <Clients />
      <Works />
      <Video />
      <Project />
      <Faqs />
      <Testimonial />
      <Funfact />
      <Contact />
      <News />
    </LayoutWrapper>
  );
};

export default Home2;