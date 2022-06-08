import React, { Component } from 'react';
import TextareaAutosize  from '@material-ui/core/TextareaAutosize';
import { Button } from '@material-ui/core';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="titleheader">JARVIS</div>
        <div className="textinput">
          <TextareaAutosize
              aria-label="minimum height"
              minRows={20}
              placeholder="Enter Text to extract"
              style={{ width: 500 }}
            />
            <Button 
            variant="contained"
            onClick={() => {
              alert('clicked');
              }}>
              Assess</Button>
        </div>
        <div className="entities">
            Entities Extracted
          </div>
      </div>
    );
  }
}

export default App;
