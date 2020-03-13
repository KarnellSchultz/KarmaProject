import React from "react";
import { Link } from "react-router-dom";

interface props {
  post: any;
  excerpt: any;
}

export const Post = ({ post, excerpt }: props) => (
  <article className={excerpt ? "post-excerpt" : "post"}>
    <h2>{post.title}</h2>
    <p> {post.body.substring(0, 100)} </p>
    {excerpt && (
      <Link to={`/posts/${post.id}`} className="button">
        View Post
      </Link>
    )}
  </article>
);