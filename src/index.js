import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import store from './store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import createAppStore from './store.js';

const { persistor, store } = createAppStore();

console.log("Store ---> ", store);
ReactDOM.render(<Provider store={store}><PersistGate persistor={persistor}><App /></PersistGate></Provider>, document.getElementById('root'));
registerServiceWorker();
