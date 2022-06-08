import React, { Component, useEffect, useState } from 'react';
import TextareaAutosize  from '@material-ui/core/TextareaAutosize';
import { Button } from '@material-ui/core';

import './App.css';

function App() {

  const [text, setText] = useState('');
  const [keywords, setKeywords] = useState('');

  async function getKeywords(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/jarvis/getkeywordshtml?text=" + encodeURIComponent(text), requestOptions)
      .then(response => response.json())
      .then(result => {
        setKeywords(result);
      })
      .catch(error => console.log('error', error));
  }

  function handleSubmit(){
    setText(text)
    getKeywords()
  }

  return (
    <div className="App">
      <div className="titleheader">JARVIS</div>
      <div className="textinput">
        <TextareaAutosize
            aria-label="minimum height"
            minRows={20}
            placeholder="Enter Text to extract"
            onChange={e => setText(e.target.value)}
            style={{ width: 500 }}
          />
          <Button 
          variant="contained"
          onClick={handleSubmit}>
            Assess</Button>
      </div>
      <div className="entities" dangerouslySetInnerHTML={{__html:keywords}}></div>
    </div>
  );
}

export default App;
