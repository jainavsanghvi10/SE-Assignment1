/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { Link } from 'react-router-dom';

import './Works.css';

// Import ../../assets/recentprojects/
import Sportify from '../../assets/recentprojects/Sportify1.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
    display:'flex',
    flexWrap:'wrap',
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Sportify', 
      description: `Designed and Developed a web application to manage sports tournaments and create/update fixtures and live scores of different events. Was Used for IIITB Sports Fest, Spandan. Built using Reactjs, Firebase`,
      url:"https://sportify-8829a.web.app/",
      alter: 'Sportify',
      image: `${Sportify}`,
    },
    { 
      id: 2,
      title: 'Complaint Box', 
      description: `The official Complaint Box of every school and company in India, so that the complaints of people can be
      heard and administration can look into it and improve it. Built using MERN Stack`,
      url:'https://github.com/pushkarpawar15/complaint-box',
      alter: 'Complaint Box',
      image: `${Veritru}`,
    },
    { 
      id: 3,
      title: 'Dungeon Crawler', 
      description: `2D Dungeon Crawler Game based on The Legend of Zelda built with the help of SDL Library in C++`,
      url:'https://github.com/jainavsanghvi10/Dungeon-Crawler',
      alter: 'Dungeon Crawler',
      image: `${Lofo}`,
    },
    { 
      id: 4,
      title: 'Friska', 
      description: `A Startup Projetc. Website for Health Related Services(Your Health Buddy Application)`,
      url:'https://friskanow.com/',
      alter: 'Friska',
      image: `${Startup}`,
    },
    { 
      id: 5,
      title: 'Survival Death Valley', 
      description: `This is a Two Dimensional Racing Car Game developed by using pygame module in python.`,
      url:'https://github.com/jainavsanghvi10/Survival-Death-Valley',
      alter: 'Survival Death Valley',
      image: `${Lacalle}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project"  key={ project.id }>
            {/* <Link to='https://sportify-8829a.web.app/'> */}
            {/* <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div> */}
            {/* </Link> */}
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            <Button variant="contained" onClick={()=>window.open(project.url)} style={{ textTransform:'capitalize', marginTop: '10px', marginBottom: '10px' }}>View Live</Button>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
