import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = { 
        images: []
     }


    componentDidMount(){
        this.fetchImages()
    }

    fetchImages = (query = "dogs") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(json => {
            this.setState({
                images: json.data.map(result => result.images.original.url)
            })
        })
        
    }


    render() { 
        
        return ( 
            <div>
                <GifSearch fetchImages={this.fetchImages} />
                <GifList images={this.state.images}/>
            </div>
         );
    }
}
 
export default GifListContainer;