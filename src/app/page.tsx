
import React from 'react';
import { SITE_NAME } from "../app/Head";
import LayoutWrapper from './LayoutWrapper';
import Banner from "./section/home1/Banner";
import Marquee from "./section/home1/Marquee";
import About from "./section/home1/About";
import Service from "./section/home1/Service";
import Work from "./section/home1/Work";
import ChooseUs from "./section/home1/ChooseUs";
import Project from "./section/home1/Project";
import Clients from "./section/home1/Clients";
import Teams from "./section/home1/Teams";
import Faqs from "./section/home1/Faqs";
import Funfact from "./section/home1/Funfact";
import Testimonial from "./section/home1/Testimonial";
import Pricing from "./section/home1/Pricing";
import Contact from "./section/home1/Contact";
import News from "./section/home1/News";
import Cta from "./section/home1/Cta";

export const metadata = {
  title: `Home Layout1 || ${SITE_NAME}`,
};

const Home: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper>
            <Banner />
            <Marquee />
            <About />
            <Service />
            <Work />
            <ChooseUs />
            <Project />
            <Clients />
            <Teams />
            <Faqs />
            <Funfact />
            <Testimonial />
            <Pricing />
            <Contact />
            <News />
            <Cta />
        </LayoutWrapper>
        </>
    );
};

export default Home;