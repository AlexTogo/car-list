import axios from 'axios';
import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID b9981df9b9177b1a7da566f30182936411506e9ace360a3bd27e9104a4f4ff66',
            },
        });
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '1em' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
