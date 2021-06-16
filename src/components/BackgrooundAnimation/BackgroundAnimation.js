import React from 'react';
import Particles from 'react-particles-js';


const BackgroundAnimation = () => (
  <div>
    <Particles
      params={{
        "particles": {
          "number": {
            "value": 50
          },
          "color":{
            "value": "#ff8000"
          },
          "size": {
            "value": 3
          }
        },
        "polygon": {
          "nb_sides": 5
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            }
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
        }
      }} />
  </div>
);

export default BackgroundAnimation;