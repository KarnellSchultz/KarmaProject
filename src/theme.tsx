// theme.js;
const karmaBlue = '#63c6cb';
const darkKarmaPink = '#ff82a7';
const lightKarmaPink = '#f8dbd5';
const karmaCream = '#f5eee8';
const karmaGreen = '#29ba80';
const red = '#ea3546';

export const themes = {
	lightTheme: {
		body: '#E2E2E2',
		text: '#363537',
		buttonBackgroundColor: red,
		buttonHoverColor: '#222',
		navColor: '#111',
		toggleBorder: '#FFF',
		mainAccent: red,
		gradient: 'linear-gradient(#39598A, #79D7ED)',
		maxMobileSize: '775px',
		minFullSize: '1160px',
	},
	darkTheme: {
		body: '#282c35',
		text: '#f0f0f0',

		//Button
		buttonBackgroundColor: red,
		buttonHoverColor: '#222',

		navColor: '#111',
		mainAccent: red,
		toggleBorder: '#6B8096',
		gradient: 'linear-gradient(#091236, #1E215D)',
		maxMobileSize: '775px',
		minFullSize: '1160px',
	},
	karmaTheme: {
		body: lightKarmaPink,
		text: '#111',

		buttonBackgroundColor: karmaGreen,
		buttonHoverColor: lightKarmaPink,

		navColor: karmaCream,
		toggleBorder: '#FFF',
		mainAccent: darkKarmaPink,
		gradient: 'linear-gradient(#39598A, #79D7ED)',
		maxMobileSize: '775px',
		minFullSize: '1160px',
	},
};
