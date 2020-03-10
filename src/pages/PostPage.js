import React, { useEffect } from "react";
import { connect } from "react-redux";

//Bring in the async featchPost action
import { featchPost, fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Posts";

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
};

//Redux state is now in the props of this component due to connect import
const PostsPage = ({ loading, posts, hasErrors }) => {
  return (
    <section>
      <h1>Posts</h1>
    </section>
  );
};

// Map redux state to react component props
const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors
});

//Connect REduct to react

export default connect(mapStateToProps)(PostsPage);
