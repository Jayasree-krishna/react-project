import React from 'react'
import data from './data.json';
import logo from './images.svg';
import './Resume.css';
export default function Resume(props) {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data=>console.log(data))

        let info=data.profile[props.location.data.id]
        console.log(info.career)
    return (



    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-4  col-sm-4 p-3 mt-5 left">
                <div className="card text-white text-center" style={{backgroundImage:"linear-gradient(to bottom,#2457d7,#3b125d)",borderRadius:"7%",color:"white", boxShadow: "4px 4px 5px 5px black"}}>
                    <div className="card-body main">
                        <div>
                            <img src={logo} alt="profileIcon" style={{width:"70%"}}/>
                        </div>
                        <div>
                            <h6>{info.basics.name}</h6>
                            <a href={"mailto:"+info.basics.role} className="text-white"><p>{info.basics.role}</p></a>
                            <a href={"tel:"+info.basics.phone} className="text-white"><p>{info.basics.phone}</p></a>
                            <p className="btn btn-success rounded-pill text-white  hi"><h6>Viewed Profile</h6></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 right">
                <div className="card" style={{border: "solid 12px blue",borderRadius:"7%", boxShadow: "4px 4px 5px 5px black"}}>
                    <div className="card-body">
                        <h1 className="text-center">RESUME</h1>
                        <hr/>
                        <div>
                            <h3>CARRER OBJECTIVE</h3>
                            <hr/>
                            <p>{info.career}</p>
                        </div>
                        <div>
                            <h3>PERSONAL INFORMATION</h3>
                            <hr/>
                            <div>
                                <div> 
                                    <ul>
                                        <li>Date of Birth:{info.Personal.DOB}</li>
                                        <li>Age:{info.Personal.age}</li>
                                        <li>Mother:{info.Personal.Mother}</li>
                                        <li>Father:{info.Personal.Father}</li>
                                        <li>Religion:{info.Personal.Religion}</li>
                                    </ul>
                                </div>
                                <div> 
                                    <ul>
                                        <li>Place of Birth:{info.Personal.place_of_Birth}</li>
                                        <li>Position Desired:{info.Personal.desired}</li>
                                        <li>Gender:{info.Personal.gender}</li>
                                        <li>Occupation:{info.Personal.moccupation}</li>
                                        <li>Occupation:{info.Personal.foccupation}</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 >EDUCATION ATTAINMENT</h3>
                            <hr/>
                            <h4 >Tertiary Education</h4>
                            <ul>
                                <li>college:{info.Education.college}</li>
                                <li>Degree:{info.Education.Degree}</li>
                                <li>Address:{info.Education.Address}</li>
                                <li>year:{info.Education.g_year}</li>
                            </ul>
                            <hr/>
                            <h4 >Elemenatry Education</h4>
                            <ul>
                                <li>School:{info.Education.school}</li>
                                <li>Address:{info.Education.Address1}</li>
                                <li>year:{info.Education.s_year}</li>
                            </ul>
                        </div>
                        <div>
                            <h3>PROJECTS</h3>
                            <hr/>
                            <p><span >OpenDB python Library</span><br/>
                            problem:To develop a library for connecting databases<br/>
                        Role:Algorithm Development</p>
                            <br/>
                            <p><span>Online Music Android App</span><br/>
                        problem:to listen online music<br/>
                            Role:Code Development in java</p>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
