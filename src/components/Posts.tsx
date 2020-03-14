import React from 'react';
import { Link } from 'react-router-dom';

interface props {
	title: string;
	body: string;
	excerpt: string;
	id: string;
}

export const Post = ({ id, title, body, excerpt }: props) => (
	<article className={excerpt ? 'post-excerpt' : 'post'}>
		<h2>{title}</h2>
		<p> {body.substring(0, 450)} . . . </p>
		{excerpt && (
			<Link to={`/posts/${id}`} className="button">
				View Post
			</Link>
		)}
	</article>
);
