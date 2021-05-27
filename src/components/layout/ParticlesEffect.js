import React, { Component } from 'react';
import Particles from 'react-particles-js';


class ParticlesEffect extends Component {

    render() {
        return (
            <div className="Particles">
            <Particles  height={220}

                    params={{
                    "particles":{
                        "number":{
                          value:200
                        },
                        "color":{
                          "value":"#ccc"
                        },
                        "shape":{
                          "type":"circle",
                          "stroke":{
                            "width":1,
                            "color": "#fff"
                          }
                        },
                        "opacity":{
                          "value":0.5,
                          "random":true,
                          "anim":{
                            "enable":false,
                            "speed":1
                          }
                        },
                        "size":{
                          "value": 2,
                          "random":true,
                          "anim":{
                          "enable":false,
      
                          }
                        },
                        "line_linked":{
                          "enable":true,
                          "distance":110,
                          "color": "#fff",
                          "width":1
                        },
                        "move":{
                          "enable":true,
                          "speed":2,
                          "direction":"none",
                          "straight":false
                        }

                      
                      },
                      "interactivity":{
                        "events":{
                          "onhover":{
                            "enable":true,
                            "mode":"repulse"
                          },
                          "onclick":{
                            "enable":true,
                            "mode":"push"
                          }
                        },
                        "modes":{
                          "repulse":{
                            "distance":50,
                            "duration":0.4
                          }
                        }
                      }
                    }}   
                />
            </div>
            )
         }}

export default ParticlesEffect;