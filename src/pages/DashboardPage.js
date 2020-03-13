import React from "react";
import { Link } from "react-router-dom";

export const DashboardPage = ({ themeToggle }) => {
  return (
    <>
      <nav>
        <section>
          <a href="/">Hola</a>
          <a href="/">Hola</a>
          <Link to="/" onClick={themeToggle}>
            Dark/Light
          </Link>
        </section>
      </nav>
      <section>
        <h1>Hola!</h1>
        <p>This is the Dashboard.</p>
        <Link to="posts" className="button">
          View Posts
        </Link>
      </section>
    </>
  );
};
