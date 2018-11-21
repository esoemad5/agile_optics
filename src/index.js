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

ReactDOM.render(
    <Provider store={createStore(reducers,
        compose(
            applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
            reduxFirestore(firebaseConfig),
            reactReduxFirebase(firebaseConfig)
        )
        )}
    >
        <App />
    </Provider>,
    document.querySelector('#root')
);