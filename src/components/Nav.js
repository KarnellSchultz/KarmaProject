import React from 'react';
import { Link } from 'react-router-dom';

import SVGHeaderComponent from '../components/SVGHeaderComponent';
export default function Nav({ themeToggle }) {
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
