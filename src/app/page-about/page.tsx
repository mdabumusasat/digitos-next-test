import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import About from "../section/home1/About";
import Marquee from "../section/home1/Marquee";
import Service from "../section/home1/Service";
import Pricing from "../section/home1/Pricing";
import Teams from "../section/about/Teams";

export const metadata = {
  title: `About Pages || ${SITE_NAME}`,
};

const AboutPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper FooterStyle="two">
            <PageTitle pageName="About Us" />
            <About />
            <Marquee />
            <Service />
            <Pricing />
            <Teams />
        </LayoutWrapper>
        </>
    );
};

export default AboutPage;