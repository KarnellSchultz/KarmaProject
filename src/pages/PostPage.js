import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsActions';
import { Post } from '../components/Posts';
import Nav from '../components/Nav';

const PostsPage = ({ dispatch, loading, posts, hasErrors, themeToggle }) => {
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	const renderPosts = () => {
		if (loading) return <p>Loading posts...</p>;
		if (hasErrors) return <p>Unable to display posts.</p>;

		if (posts) {
			return posts.map(post => (
				<Post
					key={post.id}
					id={post.id}
					title={post.title}
					body={post.body}
					excerpt
				/>
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
		</>
	);
};

const mapStateToProps = state => ({
	loading: state.posts.loading,
	posts: state.posts.posts,
	hasErrors: state.posts.hasErrors,
});

export default connect(mapStateToProps)(PostsPage);
