import React from "react";
import { Link } from "react-router-dom";
import OpenSourceProject from "../components/OpenSourceProjects";
import styled from "styled-components";
import Nav from "../components/Nav";
import Emoji from "../components/Emoji";
import Footer from "../components/Footer";

const StyledBodyContentSection = styled.section`
  position: relative;
  top: -1rem;
`;

export const DashboardPage = ({ themeToggle }) => {
  return (
    <>
      <Nav themeToggle={themeToggle} />
      <StyledBodyContentSection>
        <h1>
          Karnell Schultz
          <Emoji symbol={" 👋🏽 "} label={"hang ten emoji"} />
        </h1>
        <p>
          I'm a Web Developer who wants to make a positive impact on the world
          through code.
        </p>
        <Link to="posts" className="button">
          View Posts
        </Link>
      </StyledBodyContentSection>
      <section>
        <OpenSourceProject />
      </section>
      <Footer />
    </>
  );
};
