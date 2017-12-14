import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Header from './Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { name = 'Michael Hsu', unreadCount = 6 } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Header />
          <FormattedMessage
            id="App.message"
            defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
              one {message}
              other {messages}
            }`}
            values={{ name: <b>{name}</b>, unreadCount }}
          />
        </p>
      </div>
    );
  }
}

export default App;
