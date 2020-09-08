import React, { Component } from 'react'

export const nullScribe = {
  user_id: {}
}

const ScribeReviewContext = React.createContext({
  scribe: nullScribe,
  scribbles: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setScribe: () => { },
  clearScribe: () => { },
  setScribbles: () => { },
  addScribble: () => { },
})

export default ScribeReviewContext

export class ScribeReviewProvider extends Component {
  state = {
    scribe: nullScribe,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setScribe = scribe => {
    this.setState({ scribe })
  }

  setScribbles = scribbles => {
    this.setState({ scribbles })
  }

  clearScribe = () => {
    this.setScribe(nullScribe)
    this.setScribble([])
  }

  addScribble = scribble => {
    this.setScribble([
      ...this.state.scribble,
      scribble
    ])
  }

  render() {
    const value = {
      scribe: this.state.scribe,
      scribbles: this.state.scribbles,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setScribe: this.setScribe,
      setScribbles: this.setScribbles,
      clearScribe: this.clearScribe,
      addScribble: this.addScribble,
    }
    return (
      <ScribeReviewContext.Provider value={value}>
        {this.props.children}
      </ScribeReviewContext.Provider>
    )
  }
}
