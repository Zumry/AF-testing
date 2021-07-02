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


    }

    componentDidMount() {
        if(localStorage.getItem('_id') === null && localStorage.getItem('type') !== 'Administrator'){
            this.props.history.push('/');
        }
    }



    logout(event){
        localStorage.clear();
        this.props.history.push('/');

    }
    render() {
        return (<div>

                    <div className="nav-btn">Menu</div>
                    <div className="admin-container">

                        <div className="sidebar">
                            <div className="navDiv">
                                <a className="aDLink" href="#"><span id="dashName">ICAF 2021</span></a>
                                <ul id="dashUl">

                                    <li className="dashLi"><a className="aDLink" href="/adminDashboard/">Dashboard</a></li>
                                    <li className="dashLi"><a className="aDLink" href="/userProfile"> Admin User Profile </a></li>
                                    <li className="dashLi"><a className="aDLink" href="/adminCreateUser">Create User</a></li>
                                    <li className="dashLi"><a className="aDLink" href="/approve-conference/:id">View Requests</a></li>
                                    <li className="dashLi"><a className="aDLink" href="/AdminView/">View Users</a></li>
                                    <li className="dashLi"><a className="aDLink" href="/display-conference/:id">View Conference Contents</a></li>


                                </ul>
                            </div>
                            <button id={'logOutAdmin'} onClick={event => this.logout(event)}>Log out</button>
                        </div>


                    </div>

                <div className="main-content">


                    <h2>Admin Dashboard</h2>

                    <p>ICAF 2021 Conferences</p>
                    <div className="panel-wrapper">
                        <div className="panel-head">
                            ICAC 2020 the next level of Research Initiative of  SLIIT
                        </div>
                        <div className="panel-body">
                            Welcome to the 10th Chapter of ICAF 2021 International Conference on Application Frameworks for Sustainability 2021(IEEE ICIAFS 2021).

                            ICAC Conference was initiated by the Faculty of Computing, SLIIT and the first conference was held in December 2019.
                            This year, the second conference will be organized for the second time with expanded scope and content.
                            The 2nd International Conference on Advancements in
                            Computing (ICAC 2020) will be held at the SLIIT on the 10th and 11th of December 2020.
                            ICAC 2020 will be an excellent opportunity for researchers to be exposed to the world of innovations through
                            research and to be able to showcase their talents and share their knowledge with the academia and the industry.
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