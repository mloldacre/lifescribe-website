import React, { Component } from 'react';
import config from '../../config'
import ScribeApiService from '../../services/scribe-api-service';
import './CurrentScribeReview.css';

export default class CurrentScribeReview extends Component {
  
  
  handleClickDelete = e => {
    e.preventDefault()
    const scribbleId = this.props.

    fetch(`${config.API_ENDPOINT}/scribbles/${scribbleId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        this.context.deleteScribble(scribbleId)
        // allow parent to perform extra behaviour
        this.props.onDeleteScribble(scribbleId)
      })
      .catch(error => {
        console.error({ error })
      })
  }
  
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
          <p>{scribble.scribble_content}</p> <button
            className='Note__delete'
            type='button'
            onClick={this.handleClickDelete}>Delete</button>
          
        </li>)}
    </ul>
  )
}