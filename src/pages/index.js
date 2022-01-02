import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial</p>
      <StaticImage
        alt="A ragdoll cat lying on a bed"
        src="../images/melpo-tsiliaki-jfvZfbRxEsg-unsplash.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
