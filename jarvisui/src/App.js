import React, { useState } from 'react';
import TextareaAutosize  from '@material-ui/core/TextareaAutosize';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './App.css';
import { Container, Grid, Paper } from '@material-ui/core';
import { Keyword, KeyWordsList } from './Keywords';

function App() {

  const [text, setText] = useState('');
  const [keywords, setKeywords] = useState('');
  const [keywordsList, setKeywordsList] = useState([]);

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

  async function getKeywordsList(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/jarvis/getkeywords?text=" + encodeURIComponent(text), requestOptions)
      .then(response => response.json())
      .then(result => {
        setKeywordsList(result);
      })
      .catch(error => console.log('error', error));
  }

  function handleSubmit(){
    setText(text)
    getKeywords();
    getKeywordsList();
  }

  return (
    <div className="App">
      <AppBar position="static" style={{ background: 'black' }}>
        <Toolbar>
          <img src={require('./jarvis_image.png')} alt="jarvis" width="100" height="100"></img>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JARVIS
          </Typography>
          </Toolbar>
      </AppBar>
      <Container maxWidth="100%">
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper style={{ height:"100%" }} elevation={3}>
            <TextareaAutosize
                  aria-label="minimum height"
                  minRows={10}
                  placeholder="Enter Text to extract"
                  onChange={e => setText(e.target.value)}
                  style={{ width: "95%", height: "100%" }}/>
            <Button variant="contained" onClick={handleSubmit}>Assess</Button>
          </Paper>
          
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ height:"100%" }} elevation={3}>
            <div className='resultPanel'>This is the risk</div>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper elevation={3}>
            <div dangerouslySetInnerHTML={{__html:keywords}}/>
          </Paper>
          
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={3}>
            <KeyWordsList {...keywordsList}/>
          </Paper>
          
        </Grid>
      </Grid>
      </Container>
     
    </div>
  );
}

export default App;
