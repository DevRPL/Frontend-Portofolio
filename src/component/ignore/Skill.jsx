import React, { Component } from 'react';
import SkillBar from 'react-skillbars';
import { MDBContainer, MDBRow } from 'mdbreact';
import Title from '../Title.jsx';
import LazyLoad from 'react-lazyload';

class Skill extends Component
{
    render(){
        const skills = [
            {
                "type": "Html",
                "level": 97,
                "color": {
                    "bar": "#3498db",
                    "title": {
                    "background": "#2980b9"
                    }
                }
            },
            {
                "type": "Css",
                "level": 78,
                "color": {
                    "bar": "#3498db",
                    "title": {
                    "background": "#2980b9"
                    }
                }
            },
            {
                "type": "Bootstrap",
                "level": 93,
                "color": {
                    "bar": "#3498db",
                    "title": {
                    "background": "#2980b9"
                    }
                }
            },
            {
                "type": "Mysql",
                "level": 89,
                "color": {
                    "bar": "#3498db",
                    "title": {
                    "background": "#2980b9"
                    }
                }
            },
            {
                "type": "Mssql",
                "level": 85,
                "color": {
                    "bar": "#3498db",
                    "title": {
                    "background": "#2980b9"
                    }
                }
            },
            {
                "type": "Git",
                "level": 70,
                "color": {
                    "bar": "#3498db",
                    "title": {
                    "background": "#2980b9"
                    }
                }
            },
            {
                "type": "Nginx",
                "level": 50,
                "color": {
                    "bar": "#3498db",
                    "title": {
                    "background": "#2980b9"
                    }
                }
            },
            {
                "type": "VB.Net",
                "level": 70,
                "color": {
                    "bar": "#3498db",
                    "title": {
                    "background": "#2980b9"
                    }
                }
            }
        ];   
        const skills2 = [
            {
                "type": "Laravel",
                "level": 90,
                "color": {
                  "bar": "#3498db",
                  "title": {
                    "background": "#2980b9"
                  }
                }
              },
            {
            "type": "Lumen",
            "level": 87,
                "color": {
                    "bar": "#3498db",
                    "title": {
                    "background": "#2980b9"
                    }
                }
            },

            {
                "type": "Php",
                "level": 90,
                "color": {
                    "bar": "#3498db",
                    "title": {
                    "background": "#2980b9"
                    }
                }
            },
            {
                "type": "Codeigniter",
                "level": 83,
                "color": {
                    "bar": "#3498db",
                    "title": {
                    "background": "#2980b9"
                    }
                }
            },
            {
                "type": "Ajax",
                "level": 82,
                "color": {
                    "bar": "#3498db",
                    "title": {
                    "background": "#2980b9"
                    }
                }
            },
            {
                "type": "Jquery",
                "level": 82,
                "color": {
                    "bar": "#3498db",
                    "title": {
                    "background": "#2980b9"
                    }
                }
            },
            {
                "type": "Javascript",
                "level": 78,
                "color": {
                    "bar": "#3498db",
                    "title": {
                    "background": "#2980b9"
                    }
                }
            },
            {
                "type": "React Js",
                "level": 37,
                "color": {
                    "bar": "#3498db",
                    "title": {
                    "background": "#2980b9"
                    }
                }
            },
            {
                "type": "Rest Api",
                "level": 78,
                "color": {
                    "bar": "#3498db",
                    "title": {
                    "background": "#2980b9"
                    }
                }
            }
        ];
        
    return (
       <div>
            <MDBContainer className="mt-5">
                <div className="text-center">
                    <Title title="My Skill"/>
                </div>
                <div style={{ padding: '20px' }}></div>
                <MDBRow>
                    <div className="col-lg-5 col-md-12 mb-5 mt-3" data-wow-delay="0.4s">
                        <div className="view">
                            <LazyLoad>
                                <img className="img-fluid z-depth" src="assets/img/desktop.png" alt={`img-${Math.random()}`}/>
                            </LazyLoad>
                        </div>
                    <div className="mt-3"></div>
                    <SkillBar skills={skills}/>
                </div>
                <div className="col-lg-6 offset-lg-1 col-md-12" data-wow-delay="0.4s">
                    <SkillBar skills={skills2}/>
                </div>
            </MDBRow>
            </MDBContainer>
         </div>
        )
    }
}

export default Skill
