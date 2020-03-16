import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Posts";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const PostsPage = ({ dispatch, loading, posts, hasErrors, themeToggle }) => {
  const fadeUpAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0%)",
    from: { opacity: 0, transform: "translateY(50%)" }
  });
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading)
      return (
        <Spinner>
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Spinner>
      );
    if (hasErrors) return <p>Unable to display posts.</p>;
    if (posts) {
      return posts.map(post => (
        <animated.div style={fadeUpAnimation}>
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            excerpt
          />
        </animated.div>
      ));
    }
  };
  return (
    <>
      <Nav themeToggle={themeToggle} />
      <section>
        <h1>Posts</h1>
        {renderPosts()}
      </section>
      <Footer />
    </>
  );
};

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors
});

export default connect(mapStateToProps)(PostsPage);
