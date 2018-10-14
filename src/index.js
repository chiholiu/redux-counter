import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';

import * as serviceWorker from './serviceWorker';

// redux need a store to work with
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            };
        case "DECREMENT":
            return {
                count: state.count -1
            };
        // always add default statement in redux!
        default: 
            return state;

    }
}

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
         <Counter/>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
