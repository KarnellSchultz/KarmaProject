import React from "react";
import Emoji from "../components/Emoji";

export default function Footer() {
  return (
    <footer>
      <section>
        <p>
          Thanks for checking my stuff out
          <Emoji symbol={"🤙🏽"} label={"hang ten emoji"} />
        </p>
      </section>
    </footer>
  );
}
