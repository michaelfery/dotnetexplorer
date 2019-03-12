import React, { Component } from 'react';
import './App.css';
import Select from 'react-select';
import { primaryOptions } from './data/primary-options';
import { secondaryOptions } from './data/secondary-options';
import { tertiaryOptions } from './data/tertiary-options';
import { State } from './State';
import { Choice } from './data/Choice';

class App extends Component {
  state: State;
  timeout: any;

  constructor(props: any) {
    super(props);
    this.state = {
      firstOption: null,
      showSecond: false,
      secondOption: null,
      showThird: false,
      thirdOption: null,
      nb: '',
      usage: ''
    };
  }

  handleToggle(evt: any) {
    const { id } = evt.target;

    this.setState(
      prevState => ({ [id]: !(prevState as any)[id] }),
      () => {
        localStorage.setItem(id, (this.state as any)[id]);
      }
    );
  };

  onFirstChange(selectedOption: any) {
    if (this.state.secondOption) {
      this.setState({
        firstOption: selectedOption as Choice,
        showSecond: true,
        secondOption: null,
        showThird: false,
        nb: '',
        usage: ''
      });
    } else {
      this.setState({ firstOption: selectedOption, showSecond: true });
    }
  };

  onSecondChange (selectedOption: any) {
    if (selectedOption.usage) {
      this.setState({ nb: '', usage: '' }, () => {
        this.setState({
          secondOption: selectedOption,
          showThird: false,
          nb: selectedOption.nb,
          usage: selectedOption.usage,
          thirdOption: null
        });
      });
    } else {
      this.setState({
        secondOption: selectedOption,
        showThird: true,
        thirdOption: null,
        nb: '',
        usage: ''
      });
    }
  };

  onThirdChange(selectedOption: any) {
    this.setState({ nb: '', usage: '' }, () => {
      this.setState({
        thirdOption: selectedOption,
        nb: selectedOption.nb,
        usage: selectedOption.usage
      });
    });
  };

  render() {
    const {
      firstOption,
      secondOption,
      thirdOption,
      showSecond,
      showThird,
      nb,
      usage
    } = this.state;

    return (
      <div className="App">
        <header className="home">
          <div className="content">
            <div>
              <div>
                <h2 className="title  dark-white">
                  <span>.Net Core</span> Command Explorer
                </h2>
                <p className="subtitle dark-grey">
                  Find the right <span>commands you need</span> without digging through the web.
                </p>

                <div className="options">
                  <h3 className="options_title">I want to:</h3>

                  <Select
                    placeholder="..."
                    className="options-select"
                    classNamePrefix="options-select"
                    isSearchable={true}
                    onChange={this.onFirstChange.bind(this)}
                    value={firstOption}
                    options={primaryOptions}
                  />

                  {showSecond ? (
                    <Select
                      placeholder="..."
                      className="options-select"
                      classNamePrefix="options-select"
                      isSearchable={true}
                      onChange={this.onSecondChange.bind(this)}
                      value={secondOption}
                      options={secondaryOptions[firstOption.value]}
                    />
                  ) : null}

                  {showThird ? (
                    <Select
                      placeholder="..."
                      className="options-select"
                      classNamePrefix="options-select"
                      isSearchable={true}
                      onChange={this.onThirdChange.bind(this)}
                      value={thirdOption}
                      options={tertiaryOptions[secondOption.value]}
                    />
                  ) : null}
                </div>
              </div>
              <div>
                <div
                  className={`boards ${!this.state.usage ? ' d-none' : ''}`}
                >
                  <h3 className="board_title">Usage</h3>
                  <div className='board'>
                    {this.state.usage.length ? (
                        <code>
                          {usage}
                          {/* <Typist>{usage}</Typist> */}
                        </code>
                    ) : (
                      <div />
                    )}
                  </div>

                  {nb ? (
                    <div>
                      <h3 className="board_title">Note</h3>
                      <div className='board'>
                        <code>
                            {nb}
                        </code>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
