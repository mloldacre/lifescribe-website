import React, { Component } from 'react';
import './CurrentScribeReview.css';

export default class CurrentScribeReview extends Component {
  
  render() { 
    const { date, scribeId } = this.props            
    return (
      <div className="CurrentScribeReview">
        <h1>{date}</h1>
        <h3>{scribeId}</h3>
      </div>
    );  
  }
}
