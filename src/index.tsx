import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import App from './App';

// import "./index.css";

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
	uri: 'https://api-euwest.graphcms.com/v1/ck5xurgaz2vik01fghe9ce6g6/master',
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);

render(
	<Provider store={store}>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</Provider>,
	document.getElementById('root'),
);
