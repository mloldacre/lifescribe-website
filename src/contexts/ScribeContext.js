import React, { Component } from 'react'

export const nullScribe = {
  user_id: {}
}

const ScribeContext = React.createContext({
  scribe: nullScribe,
  scribbles: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setScribe: () => { },
  clearScribe: () => { },
  setScribbles: () => { },
  addScribble: () => { },
  deleteScribble: () => { },
})

export default ScribeContext

export class ScribeProvider extends Component {
  state = {
    scribe: nullScribe,
    scribbles: [],
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
    this.setScribbles([])
  }

  addScribble = scribble => {
    this.setScribbles([
      ...this.state.scribbles,
      scribble
    ])
  }
  
  deleteScribble = scribbleId => {
    this.setScribbles(
       this.state.scribbles.filter(scribble => scribble.id !== scribbleId)
    )
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
      deleteScribble: this.deleteScribble
    }
    return (
      <ScribeContext.Provider value={value}>
        {this.props.children}
      </ScribeContext.Provider>
    )
  }
}
