import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import PostsPage from "./pages/PostPage";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  function themeToggle() {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
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
