import './index.css';
import React from 'react';
import { Provider } from "react-redux"
import { createStore } from "redux"
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import { rootReducer } from "./reducer/index"
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
