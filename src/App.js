import React, { Component } from 'react';
import ChildExample from './ChildExample';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showChildComponent: false,
            backgroundColorForChild: '',
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    clickHandler() {
        this.setState(prevState => ({
            showChildComponent: !prevState.showChildComponent,
        }));
    }

    inputChangeHandler(e) {
        this.setState({
            backgroundColorForChild: e.target.value,
        });
    }

    render() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to the React Lifecycle Hooks Demo</h1>
            </header>

            <div className="App-intro">
                <p>Open up your JavaScript Console to see what's logged as you interact with the app.</p>
                <p>The <a href="https://reactjs.org/docs/react-component.html" target="_blank" rel="noopener noreferrer">React Component documentation</a> will be incredibly helpful in understanding the inner-workings of React.</p>
            </div>

            <div className="buttonContainer container">
                <button type="button" onClick={this.clickHandler}>Click me to toggle adding/removing a component to/from the DOM</button>
            </div>

            <div className="inputContainer container">
                <label htmlFor="backgroundColorInput">Background color for child component: </label>
                <input id="backgroundColorInput" type="text" value={this.state.backgroundColorForChild} onChange={this.inputChangeHandler} />
            </div>

            { this.state.showChildComponent && <ChildExample backgroundColor={this.state.backgroundColorForChild} /> }
        </div>
    );
  }
}

export default App;
