import React, { Component } from 'react';  //const Component = React.Component

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };  // Only Class-Based Components have state
    }

    render() {   // Every Class based Components should have a render method.
        return <input onChange = { (event) => {console.log(event.target.value)}} />;
    }
}

export default SearchBar;