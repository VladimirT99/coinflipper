import React, { Component } from 'react'
import Coin from './Coin';
import "./Container.css"

export class Container extends Component {
    static defaultProps = {
        coins: [{side: "heads", url: "https://tinyurl.com/react-coin-heads-jpg"},
        {side: "tails", url: "https://m.media-amazon.com/images/I/51bcZy+HZpL._AC_.jpg"}]
    }
    
    constructor(props){
        super(props)
        this.state = {
            current: null,
            heads: 0,
            tails: 0,
            flips: 0
        }
        this.clicker = this.clicker.bind(this);
        this.choice = this.choice.bind(this);
    }
    choice()
    {
        let randomIndex = Math.floor(Math.random() * 2) ;
        return this.props.coins[randomIndex];
    }
    clicker() {
        const newCoin = this.choice();
        this.setState(st =>{
        return{
            current: newCoin,
            flips: st.flips+1,
            heads: st.heads + (newCoin.side === "heads" ? 1 : 0),
            tails: st.tails + (newCoin.side === "tails" ? 1 : 0)
        };
        });
    }
  
    render() {
    return (
      <div className='Container'>
          <h2>Lets flip a coin!</h2>
          {this.state.current !== null && <Coin info={this.state.current}/>}
          <button onClick={this.clicker}>Flip me!</button>
          <p>Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails</p>
      </div>
    )
  }
}

export default Container