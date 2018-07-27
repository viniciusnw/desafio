'use strict';

import React, { Component } from 'react';
import style from './styles/styles.scss';

// containers
import AppContent from './containers/app-content.jsx';

class App extends Component {
    constructor() {
        super();
        this.state = {
            msgs: [],
            currentMsg: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendMsg = this.sendMsg.bind(this);
    }

    // load airports data
    componentWillMount() { }

    // handle with input text
    handleChange(e) {
        // console.log(e)
        this.setState({
            currentMsg: e.target.value
        });
    }

    // save msg in state
    sendMsg(e) {
        e.preventDefault();
        if(this.state.currentMsg){
            this.setState({
                msgs: [
                    ...this.state.msgs,
                    { text: this.state.currentMsg }
                ]
            });
        }
        this.setState({ currentMsg: '' });
        e.target[0].value = '';
    }

    // render Item
    renderItem() {
        return this.state.msgs.map(item => {
            return (
                <div className='row table-data-row'>
                    <div className='col-md-12 column-center'>
                        <p className='flight-data'>
                            {item.text}
                        </p>
                    </div>
                </div>
            );
        });
    }

    // render
    render() {
        return (
            <AppContent
                sendMsg={this.sendMsg}
                handleChange={this.handleChange}
                renderItem={this.renderItem()}
            />
        );
    }
}

export default App;
