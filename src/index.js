import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//redux
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import personReducer from './store/reducers/personReducer';

const rootReducer = combineReducers({
    personReducer: personReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
