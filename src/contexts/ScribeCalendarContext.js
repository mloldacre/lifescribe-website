import React, { Component } from 'react'

const ScribeCalendarContext = React.createContext({
  scribes: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setScribes: () => { },
})
export default ScribeCalendarContext

export class ScribesCalendarProvider extends Component {
  state = {
    scribes: [],
    error: null,
  };

  setScribes = scribes => {
    this.setState({ scribes })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      scribes: this.state.scribes,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setScribes: this.setScribes,
    }
    return (
      <ScribeCalendarContext.Provider value={value}>
        {this.props.children}
      </ScribeCalendarContext.Provider>
    )
  }
}
