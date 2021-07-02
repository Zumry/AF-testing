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
                                    <li className="dashLi"><a className="aDLink" href="/adminCreateUser">Create User</a></li>
                                    <li className="dashLi"><a className="aDLink" href="/approve-conference/:id">View Requests</a></li>
                                    <li className="dashLi"><a className="aDLink" href="/adminViewUser">View Users</a></li>
                                    <li className="dashLi"><a className="aDLink" href="/display-conference/:id">View Conference Contents</a></li>
                                    <li className="dashLi"><a className="aDLink" href="/userProfile"> Admin Profile </a></li>


                                </ul>
                            </div>
                            <button id={'logOutAdmin'} onClick={event => this.logout(event)}>Log out</button>
                        </div>


                    </div>

                <div className="main-content">


                    <h2>Admin Dashboard</h2>

                    <p>ICAF 2021 SLIIT </p>
                    <div className="panel-wrapper">
                        <div className="panel-head">
                            3RD INTERNATIONAL CONFERENCE ON ADVANCEMENTS IN COMPUTING 2021
                        </div>
                        <div className="panel-body">
                            Welcome to the 10th Chapter of ICAF 2021 International Conference on Application Frameworks for Sustainability 2021(IEEE ICIAFS 2021).

                            The 3rd International conference on advancements in computing -2021 (ICAC2021) is organized by the Faculty of Computing
                            of the Sri Lanka Institute of Information Technology (SLIIT) as an open forum for academics along with
                            industry professionals to present the latest findings and research output and practical deployments in the Computer Science and Information Technology domains.
                            Primary objective of the ICAC is to uplift the research culture and the quality of research done by Sri Lankan researchers. This conference will create
                            a platform for national and international researchers to showcase their research output, networking opportunities to discuss innovative ideas, and initiate collaborative work.
                            ICAC 2019 and ICAC 2020 were successfully conducted with a technical co-sponsorship by IEEE Sri Lanka Section and all publications are available in IEEE Xplore digital library

                            December 9 - 11 in Sri Lanka Institute of Information Technology
                        </div>
                    </div>
                    <div className="panel-wrapper">
                        <div className="panel-head">
                            How to Write the Literature Review of your research paper
                        </div>
                        <div className="panel-body">
                            ICAC 2021 will be organizing a series of workshops which will be useful for potential authors and researchers on producing publications of significant quality.
                            First workshop of the series titled “How to Write the Literature Review of your research paper”
                            will be conducted by Prof. Chandimal Jayawardena, Dean/Faculty of Computing on 5th July 2021 from 4.00 p.m to 5.00 p.m
                        </div>
                    </div>
                    <div className="panel-wrapper">
                        <div className="panel-head">
                            ICAC 2021 the next level of Research Initiative of  SLIIT
                        </div>
                        <div className="panel-body">
                            ICAC Conference was initiated by the Faculty of Computing, SLIIT and the first conference was held in December 2020.
                            This year, the second conference will be organized for the second time with expanded scope and content.
                            The 2nd International Conference on Advancements in
                            Computing (ICAC 2021) will be held at the SLIIT on the 10th and 11th of December 2021.
                            ICAC 2021 will be an excellent opportunity for researchers to be exposed to the world of innovations through
                            research and to be able to showcase their talents and share their knowledge with the academia and the industry.

                        </div>
                    </div>
                </div>
                </div>




        )

    }
}