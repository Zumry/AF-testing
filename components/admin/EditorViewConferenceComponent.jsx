import React, { Component } from 'react';
import ConferenceService from "../../Services/ConferenceService";
import '/styles/admin/Conference.css';
/*
*  IT 19167442
*  Author Nusky M.A.M
* */
class EditorViewConferenceComponent extends Component {

    constructor(props){

        super(props)
        this.state={
            id: this.props.match.params.id,
            conferences: {}


        }
    }
    componentDidMount(){
        if(localStorage.getItem('_id') === null && localStorage.getItem('type') !== 'Editor'){
            this.props.history.push('/');
        }else {
            ConferenceService.getconferenceById(this.state.id).then(res => {
                this.setState({conferences: res});

            })
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-centerTitle"> View Conference Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Creator's Name: </label>
                            <div> { this.state.conferences.creator}</div>
                        </div>

                        <div className = "row">
                            <label>Conference Title :</label>
                            <div> { this.state.conferences.conference_title }</div>
                        </div>

                        <div className = "row">
                            <label> Message:</label>
                            <div> { this.state.conferences.message }</div>
                        </div>

                        <div className = "row">
                            <label> Status: </label>
                            <div> { this.state.conferences.status }</div>
                        </div>

                        <div className = "row">
                            <label> Conference Date & Time:</label>
                            <div> { this.state.conferences.postedDate }</div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default EditorViewConferenceComponent;