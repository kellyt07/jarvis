import React, { useState } from 'react';
import TextareaAutosize  from '@material-ui/core/TextareaAutosize';
import AppBar from '@material-ui/core/AppBar';
import { Container, Grid, Paper } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Routes, Route, useNavigate } from "react-router-dom";
import {CanvasJSChart} from 'canvasjs-react-charts'

export function Strategy() {

    const navigate = useNavigate();

    function navigateToStrategy () {
        navigate('/Strategy');
      };
    
      function navigateHome () {
        navigate('/');
      };

      const options = {
            title:{
                text: "Risk Profile"
            },
            data: [
            {
                type: "column",
                dataPoints: [
                    { label: "Apple",  y: 10  },
                    { label: "Orange", y: 15  },
                    { label: "Banana", y: 25  },
                    { label: "Mango",  y: 30  },
                    { label: "Grape",  y: 28  }
                ]
            }
            ]
    }

    const options2 = {
        animationEnabled: true,
        title:{
            text: "Trending Keywords"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            indexLabelPlacement: "inside",
            dataPoints: [
                { y: 32, label: "Health" },
                { y: 22, label: "Finance" },
                { y: 15, label: "Education" },
                { y: 19, label: "Career" },
                { y: 5, label: "Family" },
                { y: 7, label: "Real Estate" }
            ]
        }]
    }

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
            <div style={{margin: "20px"}}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Paper elevation={3}>
                        <CanvasJSChart options = {options}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3}>
                        <CanvasJSChart options = {options2}/>
                    </Paper>
                </Grid>
            </Grid>
		    </div>
        </div>
		
    )
}