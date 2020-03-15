import React from 'react';
import { Link } from 'react-router-dom';
import OpenSourceProject from '../components/OpenSourceProjects';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Emoji from '../components/Emoji';
import Footer from '../components/Footer';

const StyledBodyContentSection = styled.section`
	position: relative;
	top: -1rem;
`;

export const DashboardPage = ({ themeToggle }) => {
	return (
		<>
			<Nav themeToggle={themeToggle} />
			<StyledBodyContentSection>
				<h1>
					<Emoji symbol={' 👋🏽 '} label={'hang ten emoji'} />
					Karnell Schultz
				</h1>
				<p>This is the Dashboard.</p>
				<Link to="posts" className="button">
					View Posts
				</Link>
			</StyledBodyContentSection>
			<section>
				<h1>Open Source Projects</h1>
				<OpenSourceProject />
			</section>
			<Footer />
		</>
	);
};
