import React, { Component } from 'react';
import ScribeApiService from '../../services/scribe-api-service';
import ScribeContext from '../../contexts/ScribeContext';
import './CurrentScribeReview.css';
import moment from 'moment-timezone';

export default class CurrentScribeReview extends Component {
  static defaultProps = {
    onDeleteScribble: () => { },
  }
  
  static contextType = ScribeContext
  
  handleClickDelete = ev => {
    ev.preventDefault()
    const scribbleId = this.context
    console.log('scribbleId:', scribbleId)

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

//TODO Get scribble ID passed from this function to delete action above ^
function ScribeScribbles({ scribbles = [] }) {
  return (
    <ul className='ScribeReviewViewScribblesList'>
      {scribbles.map(scribble =>
        <li key={scribble.id} className='ScribeReviewViewScribble'>
          <p>{moment(scribble.time_created).tz('America/New_York').format('MM/DD/YYYY hh:mm')}</p>
          <button
            className='Scribble__edit'
            type='button'>
            Edit
            </button>
          <button
            className='Scribble__delete'
            type='button'
            onClick={this.handleClickDelete}>
            Delete
            </button>
        </li>)}
    </ul>
  )
}
//{moment(scribe.date_created).tz('America/New_York').format('MM/DD/YYYY hh:mm a')}

//