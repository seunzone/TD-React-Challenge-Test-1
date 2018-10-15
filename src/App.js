import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: `
      {"0": 
      [{"id": 10,
        "title": "House",
        "level": 0,
        "children": [],
        "parent_id": null}],
     "1": 
      [{"id": 12,
        "title": "Red Roof",
        "level": 1,
        "children": [],
        "parent_id": 10},
       {"id": 18,
        "title": "Blue Roof",
        "level": 1,
        "children": [],
        "parent_id": 10},
       {"id": 13,
        "title": "Wall",
        "level": 1,
        "children": [],
        "parent_id": 10}],
     "2": 
      [{"id": 17,
        "title": "Blue Window",
        "level": 2,
        "children": [],
        "parent_id": 12},
       {"id": 16,
        "title": "Door",
        "level": 2,
        "children": [],
        "parent_id": 13},
       {"id": 15,
        "title": "Red Window",
        "level": 2,
        "children": [],
        "parent_id": 12}]}
      `
    };
  }

  

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  render() {
    const { text } = this.state;
  
    return (
      <Fragment>
        <div className="work-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 className="editable">Input (editable field)</h2>
                <textarea rows="30" cols="60" onChange={this.onChange.bind(this)} name="text" value={text} />
              </div>
              <div className="col-md-6">
                <h2 className="non-editable">Output</h2>
                <textarea rows="30" cols="60" readOnly value={text} />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
