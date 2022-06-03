import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const ParticleAnimation = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
         
         
        //   fpsLimit: 120,
        //   interactivity: {
        //     events: {
        //       onClick: {
        //         enable: true,
        //         mode: "push",
        //       },
        //       onHover: {
        //         enable: true,
        //         mode: "repulse",
        //       },
        //       resize: true,
        //     },
        //     modes: {
        //       push: {
        //         quantity: 4,
        //       },
        //       repulse: {
        //         distance: 50,
        //         duration: 0.4,
        //       },
        //     },
        //   },
        //   particles: {
        //     color: {
        //       value: "#0000FF",
        //     },
        //     links: {
        //       color: "#0000FF",
        //       distance: 150,
        //       enable: true,
        //       opacity: 0.5,
        //       width: 0,
        //     },
        //     collisions: {
        //       enable: true,
        //     },
        //     move: {
        //       direction: "bottom",
        //       enable: true,
        //       outModes: {
        //         default: "bounce",
        //       },
        //       random: false,
        //       speed: 1,
        //       straight: false,
        //     },
        //     number: {
        //       density: {
        //         enable: true,
        //         area: 800,
        //       },
        //       value: 200,
        //     },
        //     opacity: {
        //       value: 0.5,
        //     },
        //     shape: {
        //       type: "star",
        //     },
        //     size: {
        //       value: { min: 1, max: 5 },
        //     },
        //   },
        //   detectRetina: true,
        // }
        
         
          "fullScreen": {
              "enable": true,
              "zIndex": 1
          },
          "particles": {
              "bounce": {
                  "vertical": {
                      "value": 0
                  },
                  "horizontal": {
                      "value": 0
                  }
              },
              "color": {
                  "value": ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
                  "animation": {
                      "enable": true,
                      "speed": 30
                  }
              },
              "move": {
                  "decay": 0.1,
                  "direction": "top",
                  "enable": true,
                  "gravity": {
                      "acceleration": 9.81,
                      "enable": true,
                      "maxSpeed": 200
                  },
                  "outModes": {
                      "top": "none",
                      "default": "destroy",
                      "bottom": "bounce"
                  },
                  "speed": {
                      "min": 50,
                      "max": 150
                  }
              },
              "number": {
                  "value": 0,
                  "limit": 300
              },
              "opacity": {
                  "value": 1,
                  "animation": {
                      "enable": false,
                      "startValue": "max",
                      "destroy": "min",
                      "speed": 0.3,
                      "sync": true
                  }
              },
              "rotate": {
                  "value": {
                      "min": 0,
                      "max": 360
                  },
                  "direction": "random",
                  "move": true,
                  "animation": {
                      "enable": true,
                      "speed": 60
                  }
              },
              "tilt": {
                  "direction": "random",
                  "enable": true,
                  "move": true,
                  "value": {
                      "min": 0,
                      "max": 360
                  },
                  "animation": {
                      "enable": false,
                      "speed": 60
                  }
              },
              "shape": {
                  "type": ["circle", "square", "polygon", "character", "character", "character"],
                  "options": {
                      "polygon": [
                          {
                              "sides": 5
                          },
                          {
                              "sides": 6
                          }
                      ],
                      "character": [
                          {
                              "value": ["💩", "🤡", "🍀", "🍙"]
                          }
                      ]
                  }
              },
              "size": {
                  "value": 3
              },
              "roll": {
                  "darken": {
                      "enable": true,
                      "value": 30
                  },
                  "enlighten": {
                      "enable": true,
                      "value": 30
                  },
                  "enable": true,
                  "speed": {
                      "min": 15,
                      "max": 25
                  }
              },
              "wobble": {
                  "distance": 30,
                  "enable": true,
                  "move": false,
                  "speed": {
                      "min": -15,
                      "max": 15
                  }
              }
          },
          "emitters": {
              "position": {
                  "x": 50,
                  "y": 100
              },
              "size": {
                  "width": 0,
                  "height": 0
              },
              "rate": {
                  "quantity": 10,
                  "delay": 0.1
              }
          }
      }
      }
      />
    );
};

export default ParticleAnimation;