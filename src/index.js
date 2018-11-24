import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/firebaseConfig';

import App from './components/App';
import reducers from './reducers';


const store = createStore(
    reducers,
    compose(
        applyMiddleware(
            thunk.withExtraArgument({ getFirebase, getFirestore })
        ),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig)
    )
)
console.log("index store", store);
ReactDOM.render(
    <Provider store={store}>
        <div>
            <div className="ui segment center aligned container">
                <h1>Agile Optics</h1>
                    <p>Please send all inquiries and criticisms to:<br />AgileOptics@gmail.com</p>
            </div>
            <App />
        </div>
    </Provider>,
    document.querySelector('#root')
);