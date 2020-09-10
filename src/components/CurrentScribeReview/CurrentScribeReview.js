import React, { Component } from 'react';
import ScribeApiService from '../../services/scribe-api-service';
import ScribeContext from '../../contexts/ScribeContext';
import './CurrentScribeReview.css';
import moment from 'moment-timezone';

export default class CurrentScribeReview extends Component {

  static contextType = ScribeContext


  renderScribeScribbles = ( scribbles = [] ) => {
    const { onDelete } = this.props 
    if (!scribbles.length) {return null}
    return (
      <ul className='ScribeReviewViewScribblesList'>
        {scribbles.map(scribble =>
          <li key={scribble.id} className='ScribeReviewViewScribble'>
            <p>{moment(scribble.time_created).tz('America/New_York').format('MM/DD/YYYY hh:mm a')}</p>
            <button
              className='Scribble__edit'
              type='button'>
              Edit
            </button>
            <button
              className='Scribble__delete'
              type='button'
              onClick={() => onDelete(scribble.id)}>
              Delete
            </button>
          </li>)}
      </ul>
    )
  }

  render() {
    const { date, scribeId, scribbles } = this.props
    return (
      <div className="CurrentScribeReview">
        <h1>{moment(date).tz('America/New_York').format('MM/DD/YYYY')}</h1>
        <h3>{scribeId}</h3>
        {this.renderScribeScribbles(scribbles)}
      </div>
    );
  }

}

//TODO Get scribble ID passed from this function to delete action above ^

//{moment(scribe.date_created).tz('America/New_York').format('MM/DD/YYYY hh:mm a')}

//