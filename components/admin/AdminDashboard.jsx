import React, { Component } from 'react'
import '/styles/admin/AdminDashboard.css';

/*
*  IT 19167442
*  Author Nusky M.A.M
* */
export default class AdminDashboard extends Component {

    constructor(props){
        super(props)

        this.state={
            conferences:[]

        }

        this.go=this.go.bind(this);
    }

    componentDidMount() {
        if(localStorage.getItem('_id') === null ){
            this.props.history.push('/');
        }
    }

    go(){
        this.props.history.push('go/');

    }
    render() {
        return (<div>
                    <div className="nav-btn">Menu</div>
                    <div className="admin-container">

                        <div className="sidebar">
                            <div className="navDiv">
                                <a className="aDLink" href="#"><span id="dashName">ICAF 2021</span></a>
                                <ul id="dashUl">
                                    <li className="dashLi active"><a className="aDLink" href="#">Dashboard</a></li>
                                    <li className="dashLi"><a className="aDLink" href="/adminCreateUser">Create User</a></li>
                                    <li className="dashLi"><a className="aDLink" href="/approve-conference/:id">View Requests</a></li>
                                    <li className="dashLi"><a className="aDLink" href="/AdminView/">View Users</a></li>
                                    <li className="dashLi"><a className="aDLink" href="/display-conference/:id">View Conference Contents</a></li>
                                </ul>
                            </div>
                        </div>


                    </div>

                <div className="main-content">
                    <h2>Admin Dashboard</h2>
                    <p>ICAF 2021 Conferences</p>
                    <div className="panel-wrapper">
                        <div className="panel-head">
                            React js
                        </div>
                        <div className="panel-body">
                            Welcome to the 10th Chapter of ICAF 2021 International Conference on Application Frameworks for Sustainability 2021(IEEE ICIAFS 2021).

                            The theme for the landmark chapter is “Endowing Intelligent Sustainability“ forcing on on artificial intelligence and machine learning based
                            emerging technologies to improve and foster research in Sri Lanka and the region. As Industry 4.0 unfolds, computers are connected and
                            communicate with one another to eventually make decisions without human participation. It includes cyber-physical systems, the Internet of
                            things, cloud computing and cognitive computing.
                        </div>
                    </div>
                    <div className="panel-wrapper">
                        <div className="panel-head">
                            MERN Stack
                        </div>
                        <div className="panel-body">
                            Welcome to "The Complete MERN Stack Course 2021". In this course, we will build an in-depth Social Network website using Node.js, Express, React, and MongoDB along with ES6+. We will start with a blank text editor
                            and end with a deployed full-stack website on Heroku.
                            This course also uses the latest React Hooks and Redux which is an absolute joy. Your code will be so much simplified and readable.
                            At the end of this course, we'll build an entire project(FACEBOOK CLONE) and you will learn how these different technologies work together step by step. We'll first have a look at all the individual building blocks so that we then can also combine them all into one amazing application by the end of the course.
                        </div>
                    </div>
                    <div className="panel-wrapper">
                        <div className="panel-head">
                            Koa js
                        </div>
                        <div className="panel-body">
                            In this semester (3YS1) we have a module named Application Frameworks. In order to pass this module,
                            we need to build a group project using React JS. The project given to us was to build a web application for a Conference Management System. This system will mainly have 4 types of roles: Admin, Editor, Reviewer and User. Editors can add conference details and edit but Admin must approve them before they are published on the website.
                            Registered users can submit research papers and workshop proposals. Reviewers can approve or reject them and then a notification will be sent to the relevant user.
                            Guest Users can purchase tickets if they are willing to attend the conference.
                        </div>
                    </div>
                </div>
                </div>




        )

    }
}