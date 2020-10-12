import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Person from './Person';
import { Provider } from 'react-redux';
import store from '../store'

export default function App() {
    return (
        <Provider store={store}>
            <Fragment>

                <Person />
            </Fragment>
        </Provider>
    )

}



ReactDOM.render(<App />, document.getElementById('app'))
