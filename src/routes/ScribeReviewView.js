import React, { Component } from 'react';
import ScribeApiService from '../services/scribe-api-service';
import ScribeReviewContext from '../contexts/ScribeReviewContext';
import { Section } from '../components/Utils/Utils'
import CurrentScribeReview from '../components/CurrentScribeReview/CurrentScribeReview'


export default class ScribeReviewView extends Component {
  static defaultProps = {
    match: { params: {} },
  }
  
  static contextType = ScribeReviewContext

  componentDidMount() {
    const { scribeId } = this.props.match.params
    this.context.clearError()
    ScribeApiService.getScribe(scribeId)
    .then(this.context.setScribe)
    .catch(this.context.setError)
  }
  
  componentWillUnmount(){
    this.context.clearScribe()
  }

  renderScribe() {
      const { scribe } =this.context
      return <CurrentScribeReview
        date={scribe.date_created}
        scribeId={scribe.id}
      />
  }

  render() {
    const { error } = this.context    
    return (
      <Section className="ScribeReviewView">
        <h3>Current Scribe Review Page</h3>
        {error
          ? <p className='error'>There was an error, try again</p>
          : this.renderScribe()}
      </Section>
    );
  }
}
