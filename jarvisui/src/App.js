import React, { Component } from 'react';
import TextareaAutosize  from '@material-ui/core/TextareaAutosize';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="titleheader">
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static" style={{ background: 'black' }}>
                <Toolbar>
                  <img src={require('./jarvis_image.png')} alt="jarvis" width="100" height="100"></img>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    JARVIS
                  </Typography>
                 </Toolbar>
              </AppBar>
            </Box>
        </div>
        <div className="inputpanel">
          <Card sx={{ minWidth: 20 }} variant="outlined">
            <CardContent>
              <div className="textarea">
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={10}
                  placeholder="Enter Text to extract"
                  style={{ width: 600 }}
                />
              </div>
              <div className="inputbutton">
                <Button variant="contained">
                  Assess</Button>
                </div>
                <div className="textarea">
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={10}
                  placeholder="Enter Text to extract"
                  style={{ width: 600 }}
                />
              </div>
            </CardContent>
          </Card>
          </div>
          <div className="resultpanel">
          <Card sx={{ minWidth: 20 }} variant="outlined">
            <CardContent>
              This is the risk
            </CardContent>
          </Card>
          </div>
      </div>
    );
  }
}

export default App;
