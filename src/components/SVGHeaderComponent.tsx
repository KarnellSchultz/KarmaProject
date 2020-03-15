import React from 'react';
import styled from 'styled-components';

export const StyledSVGContainer = styled.div`
	@media screen and (max-width: ${({ theme }) => theme.maxMobileSize}) {
		height: 100px;
		margin-top: 0rem;
	}
	@media screen and (min-width: 1160px) {
		height: 300px;
		margin-top: -6rem;
	}
	display: inline-block;
	position: relative;
	width: 100%;
	height: 200px;
	padding-bottom: 2rem;
	vertical-align: middle;
	margin-top: -3rem;
	z-index: -100;

	svg {
		display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
	}

	path {
		fill: ${({ theme }) => theme.mainAccent};
		stroke: none;
	}
`;

export default function SVGHeaderComponent() {
	return (
		<>
			<StyledSVGContainer className="container">
				<svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
					<path d="M0,100 C150,150 350,0 700,100 L500,00 L0,0 Z"></path>
				</svg>
			</StyledSVGContainer>
		</>
	);
}
