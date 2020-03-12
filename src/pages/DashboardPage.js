import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => (
  <>
    <nav>
      <section>
        <a href="/">Hola</a>
        <a href="/">Hola</a>
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
export default DashboardPage;
