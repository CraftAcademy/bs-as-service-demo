import React, { Component } from 'react';
import { getSentence, getParagraph, getQuote } from './modules/bullShit'

class App extends Component {
  state = {
    randomBS: getParagraph()
  }

  getNewBS = () => {
    this.setState({randomBS: getParagraph()})
  }

  render() {
    return (
      <div>
        <h1>{this.state.randomBS}</h1>
        <button onClick={this.getNewBS}>Tell me more...</button>
      </div>
    );
  }
}

export default App;