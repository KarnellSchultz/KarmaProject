import React from "react";
import { Link } from "react-router-dom";

export const Post = ({ title, body, excerpt }) => (
  <article className={excerpt ? "post-excerpt" : "post"}>
    <h2>{title}</h2>
    <p> {body.substring(0, 100)} . . . </p>
    {excerpt && (
      <Link to={`/posts/${title}`} className="button">
        View Post
      </Link>
    )}
  </article>
);
