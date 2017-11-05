import React, { Component } from 'react';  //const Component = React.Component

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };  // Only Class-Based Components have state
    }

    render() {   // Every Class based Components should have a render method.
        return (
            <div>
        <input onChange = { (event) => this.setState({ term: event.target.value})} />
        Value of the Input is : {this.state.term}
        </div>
        );
    }
}

export default SearchBar;