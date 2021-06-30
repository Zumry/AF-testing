import React, { Component } from 'react';
import ConferenceService from "../../Services/ConferenceService";
import '/styles/admin/Conference.css';
/*
*  IT 19167442
*  Author Nusky M.A.M
* */
class ListConferenceComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            conferences:[]

        }
        this.createconference=this.createconference.bind(this);
        this.updateconference = this.updateconference.bind(this);
        this.deleteconference = this.deleteconference.bind(this);
        this.approveconference=this.approveconference.bind(this);
        this.displayconference=this.displayconference.bind(this);
        this.displayworkshops=this.displayworkshops.bind(this);
        this.AdminDashboard=this.AdminDashboard.bind(this);

    }

    deleteconference(id){
        ConferenceService.deleteconference(id).then( res => {
            this.setState({conferences: this.state.conferences.filter(conference => conference.id !== id)});
        });


    }

    viewconference(id){
        this.props.history.push(`/view-conference/${id}`);
    }

    updateconference(id){
        this.props.history.push(`/update-conference/${id}`);
    }


    componentDidMount(){
        if(localStorage.getItem('_id') === null ){
            this.props.history.push('/');
        }else {
            ConferenceService.getConference().then((res) => {
                this.setState({conferences: res});
            });
        }
    }

    createconference(){
        this.props.history.push('');

    }
    //Admin
   approveconference(){
        this.props.history.push('approve-conference/_add');

    }

    displayconference(){
        this.props.history.push('display-conference/_add');

    }

    displayworkshops(){
        this.props.history.push('display-workshops/');

    }

    AdminDashboard(){
        this.props.history.push('AdminDashboard/');

    }
    render() {
        return (
            <div>
                <h2 className="text-center"> Conference Content  List </h2>
                <div className= "row">
                    <button className="btn btn-primary" onClick={this.displayworkshops}>Workshops</button>
                    <button className="btn btn-primary" onClick={this.displayconference}>Display</button>

                </div>
                <br></br>
                <div className="row">

                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th> Creator</th>
                            <th> Conference Title </th>
                            <th> Message</th>
                            <th> Status</th>
                            <th> Conference Date & Time</th>
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
                                        <td> {conference.status}</td>
                                        <td> {conference.postedDate}</td>

                                        <td>
                                            <button onClick={ () => this.updateconference(conference.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteconference(conference.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewconference(conference.id)} className="btn btn-info">View </button>
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
export default ListConferenceComponent;
