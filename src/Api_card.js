import React, { Component } from 'react';

import './APi_card.css';
class Api_card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            status: false
        };

    }
    componentDidMount(){
        this.newQuote()
    }
    newQuote = () => {
        fetch('https://movie-quote-api.herokuapp.com/v1/quote/')
            .then(resp => resp.json())
            .then(resp => this.setState({ posts: resp,
            status: true
            }));


    }


    render() {
        console.log(this.state.status);

        return (
            <div className='Main_card'>
                <div className='Main_color'>
                    


                    <div className='main-btn'>
                        <img onClick={this.newQuote} src="button.png" alt="button" />

                        <img className='main-btn2' onClick={this.newQuote} src="left.png" alt="button" />

                    </div>
                    {this.state.status ?(<div className='Main_quote'>

<img className="Main_quote" onClick={this.newQuote} src="quote.png" alt='quote_image' />

</div>):(<></>)}
<p>
                    {this.state.posts.quote}</p>
                </div>
            </div>

        );
    }
}

export default Api_card;
