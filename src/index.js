import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from 'redux/configureStore';

const store = configureStore();

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

serviceWorker.unregister();
