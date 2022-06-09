import React, { useState } from 'react';
import TextareaAutosize  from '@material-ui/core/TextareaAutosize';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Routes, Route, useNavigate } from "react-router-dom";

export function Strategy() {

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
        </div>
    )
}