import React from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectContainer';

const OpenSourceSection = styled.section`
	/* background: #fafafa; */
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

export default function OpenSourceProjects() {
	return (
		<>
			<OpenSourceSection>
				<ProjectItem
					title={'Soda React From 🥃'}
					link={'https://soda-react-form.netlify.com/'}
					gitLink={'https://github.com/KarnellSchultz/ReactFormWork'}
					blurb={`Super cool react form using Hooks! I love it so much and here is a
                    lot of text.`}></ProjectItem>
				<ProjectItem
					title={'Myra Tracker 🐜'}
					gitLink={'https://github.com/KarnellSchultz/MyraTrackingApp'}
					link={'https://myratracker.firebaseapp.com/login.html'}
					blurb={`Super cool react form using Hooks! I love it so much and here is a
                    lot of text.`}></ProjectItem>
				<ProjectItem
					title={'KarnellSchultz.com 🔥'}
					link={'KarnellSchultz.com'}
					gitLink={'https://github.com/KarnellSchultz/karnell-site'}
					blurb={`Track the progress of tasks through completion. This is a browser application made with Vue.js.`}></ProjectItem>
				<ProjectItem
					title={'This Site ?🌍?'}
					gitLink={'#'}
					link={'#'}
					blurb={`Super cool react form using Hooks! I love it so much and here is a
                    lot of text.`}></ProjectItem>
			</OpenSourceSection>
		</>
	);
}
