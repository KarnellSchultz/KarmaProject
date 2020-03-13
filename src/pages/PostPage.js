import React, { useEffect } from "react";

import { connect } from "react-redux";

import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Posts";
import { Link } from "react-router-dom";

const PostsPage = ({ dispatch, loading, posts, hasErrors, themeToggle }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Show loading, error, or success state
  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    console.log(typeof posts);
    return <Post key={posts.id} post={posts.name} excerpt />;
    // return posts.map(post => <Post key={post.id} post={post.id} excerpt />);
  };

  return (
    <>
      <nav>
        <section>
          <a href="/">Hola</a>
          <Link to="#" onClick={themeToggle}>
            Dark/Light
          </Link>
        </section>
      </nav>
      <section>
        <h1>Posts</h1>
        {renderPosts()}
      </section>
    </>
  );
};

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors
});

export default connect(mapStateToProps)(PostsPage);
