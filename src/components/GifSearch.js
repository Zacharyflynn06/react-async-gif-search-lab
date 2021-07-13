import React, { Component } from 'react';

class GifSearch extends Component {
    state = { 
        query: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchImages(this.state.query)
    }


    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={e => 
                        this.setState({query: e.target.value})}
                        type="text"
                        value={this.state.query} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
 
export default GifSearch;