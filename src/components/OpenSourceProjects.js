import React from 'react';
import styled from 'styled-components';

const OpenSourceSection = styled.section`
	background: cornflowerblue;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	div:first-of-type {
		background: linear-gradient(
				to right top,
				rgb(219, 112, 147),
				rgb(218, 163, 87)
			)
			rgb(255, 255, 255);
	}
`;

const OpenSourceItem = styled.div`
	@media screen and (max-width: 740px) {
		width: 90%;
	}
	width: 45%;
	height: 180px;
	min-height: 150px;
	background: linear-gradient(to right top, rgb(114, 19, 251), rgb(79, 22, 238))
		rgb(255, 255, 255);
	box-shadow: 0 0 0 0.1px rgba(0, 0, 0, 0.4);
	border-radius: 5px;
	margin-bottom: 1rem;
	margin-top: 1rem;
`;

export default function OpenSourceProjects() {
	return (
		<>
			<OpenSourceSection>
				<OpenSourceItem>
					<h1>Soda React From 🥃</h1>
				</OpenSourceItem>
				<OpenSourceItem>
					<h1>Myra Tracking App</h1>
				</OpenSourceItem>
			</OpenSourceSection>
		</>
	);
}
