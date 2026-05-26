import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import Pricing from "../section/home1/Pricing";

export const metadata = {
  title: `Pricing Page || ${SITE_NAME}`,
};


const ProjectPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper FooterStyle="two">
            <PageTitle pageName="Pricing" />
            <Pricing />
        </LayoutWrapper>
        </>
    );
};

export default ProjectPage;