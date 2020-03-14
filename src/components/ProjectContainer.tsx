import React from 'react';
import styled from 'styled-components';

const OpenSourceItem = styled.div`
	@media screen and (max-width: ${({ theme }) => theme.maxMobileSize}) {
		width: 90%;
	}
	width: 45%;
	min-width: 330px;
	height: 190px;
	min-height: 150px;
	background: linear-gradient(to right top, rgb(114, 19, 251), rgb(79, 22, 238))
		rgb(255, 255, 255);
	box-shadow: 0 0 0 0.1px rgba(0, 0, 0, 0.4);
	border-radius: 5px;
	margin: 0.5rem 0.2rem 0.2rem 0.2rem;
	transition: all 300ms ease;

	h3 {
		padding-left: 1rem;
	}
	p {
		padding: 0 1rem 1rem 1rem;
	}

	:hover,
	:active,
	:focus {
		cursor: pointer;
		box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
		h3 {
			text-decoration: underline;
		}
	}
`;

const StyledLink = styled.a`
	color: inherit;
`;
const StyledGitLink = styled(StyledLink)`
	display: flex;
	justify-content: flex-end;
	margin-right: 1rem;
	:hover {
		text-decoration: underline;
	}
`;

interface props {
	title: string;
	blurb: string;
	link: string;
	gitLink: string;
}

export default function ProjectItem({
	title,
	blurb,
	link = '#',
	gitLink = '#',
}: props) {
	return (
		<OpenSourceItem>
			<StyledLink href={link}>
				<h3>{title}</h3>
				<p>{blurb}</p>
				<StyledGitLink href={gitLink}>View on GitHub</StyledGitLink>
			</StyledLink>
		</OpenSourceItem>
	);
}
