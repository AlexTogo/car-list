import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        // if its not a functional components need to use '.this'
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Search</label>
                        {/* 
                            -not put parentheses onChange function
                            -Controlled Component via State much better
                        */}
                        <input text='text' value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
