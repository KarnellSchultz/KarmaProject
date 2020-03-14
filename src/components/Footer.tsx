import React from 'react';
import Emoji from '../components/Emoji';

export default function Footer() {
	return (
		<footer>
			<section>
				<p>Thanks for checking my stuff out</p>
				<Emoji symbol={'🤙🏽'} label={'hang ten emoji'} />
			</section>
		</footer>
	);
}
