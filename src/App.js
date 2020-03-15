import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage';
import PostsPage from './pages/PostPage';

import { ThemeProvider } from 'styled-components';
import { themes } from './theme';
import { GlobalStyles } from './global.js';

const App = () => {
	const [theme, setTheme] = useState(themes.lightTheme);

	function themeToggle() {
		if (theme === themes.lightTheme) {
			return setTheme(themes.darkTheme);
		} else if (theme === themes.darkTheme) {
			return setTheme(themes.karmaTheme);
		} else {
			return setTheme(themes.lightTheme);
		}
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Router>
					<Switch>
						<Route exact path="/" component={DashboardPage}>
							<DashboardPage themeToggle={themeToggle} />
						</Route>
						<Route exact path="/posts" component={PostsPage}>
							<PostsPage themeToggle={themeToggle} />
						</Route>
						<Redirect to="/" />
					</Switch>
				</Router>
			</ThemeProvider>
		</>
	);
};

export default App;
