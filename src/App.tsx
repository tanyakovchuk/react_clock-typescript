import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

export class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    this.setState({ clockName: Math.round(Math.random() * 100) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <section className="app">
        <h1 className="app__title">React clock</h1>
        <div>
          <div className="app__clock">
            {isClockVisible && <Clock name={clockName} />}
          </div>
          <div className="app__buttons">
            <button
              type="button"
              className="app__button"
              onClick={this.showClock}
            >
              Show clock
            </button>
            <button
              type="button"
              className="app__button"
              onClick={this.hideClock}
            >
              Hide clock
            </button>
            <button
              type="button"
              className="app__button"
              onClick={this.setRandomName}
            >
              Random Name
            </button>
          </div>
        </div>
      </section>
    );
  }
}
