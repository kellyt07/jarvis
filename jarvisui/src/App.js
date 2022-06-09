import React, { useState } from 'react';
import TextareaAutosize  from '@material-ui/core/TextareaAutosize';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Strategy } from './Strategy';
import GaugeChart from 'react-gauge-chart';

import './App.css';
import { Container, Grid, Paper } from '@material-ui/core';
import { KeyWordsList } from './Keywords';

import {CanvasJSChart} from 'canvasjs-react-charts'


function App() {

  const [text, setText] = useState('');
  const [keywords, setKeywords] = useState('');
  const [keywordsList, setKeywordsList] = useState([]);

  const chartOptions = {
    animationEnabled: true,
    title: {
      text: "Identified Flags"
    },
    height: "160",
    data: [{
      type: "doughnut",
      showInLegend: true,
      indexLabel: "{name}: {y}",
      yValueFormatString: "#,###'%'",
      dataPoints: [
        { name: "NORP ", y: 5 },
        { name: "PERSON", y: 31 },
        { name: "ORG", y: 40 },
        { name: "GPE", y: 17 },
        { name: "DATE", y: 7 }
      ]
    }]
  };

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

  const navigate = useNavigate();

  function navigateToStrategy () {
    navigate('/Strategy');
  };

  function navigateHome () {
    navigate('/');
  };

   return (
    <div className="App">
      <AppBar position="static" style={{ background: 'black' }}>
        <Toolbar>
          <img src={require('./jarvis_image.png')} alt="jarvis" width="50" height="50" onClick={navigateHome} style={{cursor: 'pointer'}}></img>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ flex: 1 }}>
            JARVIS
          </Typography>
          <div>
            <Button style={{float:"right", screenLeft:"100px"}} onClick={navigateToStrategy}>Strategy</Button>
          </div>
          </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper style={{ height:"100%" }} elevation={3}>
            <TextareaAutosize
                  aria-label="minimum height"
                  minRows={10}
                  placeholder="Enter Text to extract"
                  onChange={e => setText(e.target.value)}
                  style={{ width: "95%" }}/>
            <Button variant="contained" onClick={handleSubmit}>Assess</Button>
          </Paper>
          
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ height:"100%" }} elevation={3}>
            <div className='resultPanel'>This is the risk</div>
            <div style={{width: "100%", display: "flex", flexDirection: "row"}}>
              <GaugeChart id="gauge-chart2" 
                nrOfLevels={3} 
                percent={0.86} 
                textColor={"black"}
                style={{ width: "50%"}}
              />
              <div style={{ width: "50%"}}>
                <CanvasJSChart options = {chartOptions}/>
              </div>
            </div>
              
              
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
