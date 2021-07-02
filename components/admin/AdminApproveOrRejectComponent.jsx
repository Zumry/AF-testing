import React, { Component } from 'react';
import ConferenceService from "../../Services/ConferenceService";
import '/styles/admin/Conference.css';

/*
*  IT 19167442
*  Author Nusky M.A.M
* */
class AdminApproveOrRejectComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            conferences:[]

        }

        this.deleteapproval = this.deleteapproval.bind(this);
        this.approveconference = this.approveconference.bind(this);
       /* this.rejectonference = this.rejectonference.bind(this);*/
        this.updateconferenceApproval = this.updateconferenceApproval.bind(this);


    }

    deleteapproval(id){
        ConferenceService.deleteconference(id).then( res => {
            this.setState({conferences: this.state.conferences.filter(conference => conference.id !== id)});
        });
    }

// Approval
    updateconferenceApproval(id){
        this.props.history.push(`/update-conferenceapproval/${id}`);
    }

   approveconference(id){
        this.props.history.push(`/Approve-conference/${id}`);
    }


    approvalconference(id){

        console.log(id);
        let approval = {aStatus:"Approved"}
        ConferenceService.ConferenceApproval(id,approval)
            .then(response =>{
                let conference = response;
                if(conference.status === "Approved"){
                    alert("Approved")
                }else{
                    alert("Something went wrong, try again!!")
                }
            })
    }

//Admin Reject
    rejectconference(id){

        let approval = {aStatus:"Rejected"}
        ConferenceService.ConferenceApproval(id,approval)
            .then(response =>{
                let conference = response;
                if(conference.status === "Rejected"){
                    alert("Rejected")
                }else{
                    alert("Something went wrong, try again!!")
                }
            })
    }
    logout(event){
        localStorage.clear();
        this.props.history.push('/');

    }


    componentDidMount(){
        if(localStorage.getItem('_id') === null && localStorage.getItem('type') !== 'Administrator'){
            this.props.history.push('/');
        }else {
            ConferenceService.getConference().then((res) => {

                this.setState({conferences: res});
            });
        }
    }

    render() {
        return (
            <div>

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
                <h2 className="text-center"> Admin View Conference List </h2>

                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th> Creator</th>
                            <th> Conference Title </th>
                            <th> Message</th>

                            <th> Conference Date & Time</th>
                            <th> Status</th>
                            <th> Actions</th>
                        </tr>

                        </thead>

                        <tbody>
                        {
                            this.state.conferences.map(
                                conference =>
                                    <tr key={conference.id}>
                                        <td> {conference.creator}</td>
                                        <td> {conference.conference_title}</td>
                                        <td> {conference.message}</td>
                                        <td> {conference.postedDate}</td>
                                        <td> {conference.status}</td>
                                        <td >
                                            {
                                                conference.status === 'Approved'?

                                                    (<span id={'stateS'}> Approved</span>)
                                                    :conference.status === 'Rejected'?(<span id={'stateS'}>Rejected</span>)
                                                    :(
                                                        <div>
                                                             <button onClick={ () => this.approvalconference(conference.id)} className="btn btn-info">Approve</button>
                                                           <button onClick={ () => this.rejectconference(conference.id)} className="btn btn-danger">Reject</button>

                                                        </div>
                                                    )
                                            }

                                        </td>


                                    </tr>


                            )

                        }

                        </tbody>

                    </table >

                </div>
            </div>
        )
    }
}

export default AdminApproveOrRejectComponent;
