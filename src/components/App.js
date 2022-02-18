import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID ObO4Og1oimmTg_DR3Wx_sGQOdw724CqSuFmcOCu7tz0'
            }
        });
    }

    render() {
        return <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>;
    }
}

export default App;