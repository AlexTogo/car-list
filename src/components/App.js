import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../API/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
    state = { image: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });

        this.setState({ image: response.data.results });
    };

    render() {
        return (
            <div className='ui container' style={{ marginTop: '1em' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.image} />
            </div>
        );
    }
}

export default App;
