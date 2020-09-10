import React, { Component } from 'react';
import config from '../../config'
import ScribeApiService from '../../services/scribe-api-service';
import ScribeContext from '../../contexts/ScribeContext';
import './CurrentScribeReview.css';

export default class CurrentScribeReview extends Component {
  static defaultProps = {
    onDeleteScribble: () => { },
  }
  
  static contextType = ScribeContext
  
  handleClickDelete = ev => {
    ev.preventDefault()
    const scribbleId = this.props.

    ScribeApiService.deleteScribble(scribbleId)
      .then(() => {
        this.context.deleteScribble(scribbleId)
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
          <p>{scribble.scribble_content}</p>
          <button
            className='Scribble__edit'
            type='button'>
            Edit
            </button>
          <button
            className='Scribble__delete'
            type='button'>
            Delete
            </button>
          
        </li>)}
    </ul>
  )
}

//onClick={this.handleClickDelete}