import React, { Component } from 'react';

import './APi_card.css';
class Api_card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };

    }
    newQuote = () => {
        fetch('https://movie-quote-api.herokuapp.com/v1/quote/')
            .then(resp => resp.json())
            .then(resp => this.setState({ posts: [resp] }))

    }

    render() {

        return (
            <div className='Main_card'>
                <div className='Main_color'>
                    <img className='Main_quote' src="quote.png" alt='quote_image' />

                    <div className='main-btn'>
                        <img onClick={this.newQuote} src="button.png" alt="button" />

                        <img className='main-btn2' onClick={this.newQuote} src="left.png" alt="button" /></div>

                    {this.state.posts.map((posts, i) => {
                        return (
                            <p key={i}>
                                {posts.quote}</p>


                        )


                    })}
                </div>
            </div>

        );
    }
}

export default Api_card;