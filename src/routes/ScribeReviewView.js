import React, { Component } from 'react';
import ScribeApiService from '../services/scribe-api-service';
import ScribeContext from '../contexts/ScribeContext';
import { Section } from '../components/Utils/Utils'
import CurrentScribeReview from '../components/CurrentScribeReview/CurrentScribeReview'


export default class ScribeReviewView extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ScribeContext

  componentDidMount() {
    const { userId ,scribeId } = this.props.match.params
    this.context.clearError()
    ScribeApiService.getScribeScribbles( userId, scribeId)
      .then(this.context.setScribbles)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearScribe()
  }

  renderScribe() {
    const { scribe, scribbles } = this.context
    return <CurrentScribeReview
      date={scribe.date_created}
      scribeId={scribe.id}
      scribbles={scribbles}
    />
  }

  render() {
    const { error } = this.context
    return (
      <Section className="ScribeReviewView">
        <h3>Current Scribe Review Page</h3>
        {error
          ? <p className="error">There was an on the Scribe Review Page error, try again</p>
          : this.renderScribe()}
      </Section>
    );
  }
}


