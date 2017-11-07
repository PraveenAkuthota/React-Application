import React, { Component } from 'react';  //const Component = React.Component

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };  // Only Class-Based Components have state
    }

    render() {   // Every Class based Components should have a render method.
        return (
            <div className="search-bar">
                <input
                    // Controlled Form Element means the input value is set by the state. So Value changes only when the state changes.
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;