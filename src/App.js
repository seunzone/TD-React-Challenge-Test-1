import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  
  render() {
  
    return (
      <Fragment>
        <div className="work-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 className="editable">Input (editable field)</h2>
                <textarea rows="30" cols="60" placeholder="lorem ipsum" />
              </div>
              <div className="col-md-6">
                <h2 className="non-editable">Output</h2>
                <textarea rows="30" cols="60" placeholder="lorem ipsum"  />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
