import React from 'react';
import { Link } from 'react-router-dom';
import SVGHeaderComponent from './SVGHeaderComponent';

interface props {
	themeToggle: any;
}

export default function Nav({ themeToggle }: props) {
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
			<SVGHeaderComponent />
		</>
	);
}
