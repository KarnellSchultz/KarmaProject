import React from "react";
import { Link } from "react-router-dom";
import SVGHeaderComponent from "./SVGHeaderComponent";
import Emoji from "./Emoji";
interface props {
  themeToggle: any;
  theme: any;
}

export default function Nav({ themeToggle }: props) {
  return (
    <>
      <nav>
        <section>
          <a href="/">Home</a>
          <a href="/posts">View Posts</a>
          <Link to="#" onClick={themeToggle}>
            Change Theme
            <Emoji symbol={" 👉🏽"} label={"hang ten emoji"} />
          </Link>
        </section>
      </nav>
      <SVGHeaderComponent />
    </>
  );
}
