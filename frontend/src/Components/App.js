import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PersonForm from './PersonForm';


export default class App extends Component {
    render() {
        return (


            <PersonForm />

        )

    }
}



ReactDOM.render(<App />, document.getElementById('app'))
