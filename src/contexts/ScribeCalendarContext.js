import React, { Component } from 'react'

const ScribeCalendarContext = React.createContext({
  scribeList: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setScribeList: () => { },
})
export default ScribeCalendarContext

export class ScribeListProvider extends Component {
  state = {
    scribeList: [],
    error: null,
  };

  setScribeList = scribeList => {
    this.setState({ scribeList })
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
      scribeList: this.state.scribeList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setscribeList: this.setscribeList,
    }
    return (
      <ScribeCalendarContext.Provider value={value}>
        {this.props.children}
      </ScribeCalendarContext.Provider>
    )
  }
}
