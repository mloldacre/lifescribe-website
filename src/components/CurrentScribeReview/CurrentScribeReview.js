import React, { Component } from 'react';
import './CurrentScribeReview.css';

export default class CurrentScribeReview extends Component {
  
  render() { 
    const { date, scribeId, scribbles } = this.props            
    return (
      <div className="CurrentScribeReview">
        <h1>{date}</h1>
        <h3>{scribeId}</h3>
        <ScribeScribbles scribbles={scribbles} />
      </div>
    );  
  }
}

function ScribeScribbles({ scribbles = [] }) {
  return (
    <ul className='ScribeReviewViewScribblesList'>
      {scribbles.map(scribble =>
        <li key={scribble.id} className='ScribeReviewViewScribble'>
          <p>{scribble.scribble_content}</p>
        </li>)}
    </ul>
  )
}