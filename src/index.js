import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./i18next.js";
import getApolloClient from "./apolloClient";

(async () => {
    const apolloClient = await getApolloClient();
    ReactDOM.render(<App apolloClient={apolloClient} />,
   document.getElementById('root'));
   })()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
