import React from 'react';
import { Link } from 'react-router-dom';
import OpenSourceProject from '../components/OpenSourceProjects';

export const DashboardPage = ({ themeToggle }) => {
	return (
		<>
			<nav>
				<section>
					<a href="/">Hola</a>
					<Link to="/" onClick={themeToggle}>
						Dark/Light
					</Link>
				</section>
			</nav>
			{/* <div className="container">
				<svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
					<path
						d="M0,100 C150,150 350,0 700,100 L500,00 L0,0 Z"
						// d="M631.369 25.9048C783.068 25.9048 922.392 0 1024 0V64H0V21.3406C80.468 15.9245 131.944 7.61905 243.2 7.61905C408.284 7.61905 479.671 25.9048 631.369 25.9048Z"
						style={{ stroke: 'none', fill: '#ea3546' }}></path>
				</svg>
			</div> */}
			<section>
				<h1>Hola!</h1>
				<p>This is the Dashboard.</p>
				<Link to="posts" className="button">
					View Posts
				</Link>
			</section>
			<section>
				<h1>Open Source Projects</h1>
				<OpenSourceProject />
			</section>
		</>
	);
};
