import React from "react";
import { Link } from "react-router-dom";

export const Post = ({ post, excerpt }) => (
  <article className={excerpt ? "post-excerpt" : "post"}>
    <h2>{post}</h2>
    <p> {post} </p>
    {excerpt && (
      <Link to={`/posts/${post}`} className="button">
        View Post
      </Link>
    )}
  </article>
);
