import React, { Component } from 'react';
import Display from './Display';
import DisplayTwo from './DisplayTwo';

class App extends Component {
    state = {
        firstName: 'alina',
        lastName: 'joe',
        age: 20,
        city: 'pune'
    }

    handleClick = () => {
        this.setState({
            city: 'hyderabad'
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click</button>

                {/* sending data(props) to Display via HTML attribute */}
                <Display displayData={this.state} />

                <DisplayTwo />
            </div>
        )
    }
}

export default App;


//task
//create a employee data, send data from 1 component to another and display it
//create a object pass data from 1 class based to another class based data and display it (this.props)
//create a object and update its data on click of a button and display data in another component


//task (using hooks)
//create a employee data and display it in UI
//practice all datatypes for state variable

