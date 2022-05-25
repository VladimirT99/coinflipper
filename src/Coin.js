import React, { Component } from 'react'
import "./Coin.css"

export class Coin extends Component {
  render() {
    return (
        <div className='Coin'>
            <img src={this.props.info.url} alt={this.props.info.alt}/>
        </div>
      
    )
  }
}

export default Coin