import React, { Component } from 'react';
import ConferenceService from "../../Services/ConferenceService";
import '/styles/admin/Conference.css';
/*
*  IT 19167442
*  Author Nusky M.A.M
* */
class EditConferenceComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            creator:'',
            conference_title:'',
            message:'',
            status:'Pending',
            postedDate:''

        }

        this.updateConference = this.updateConference.bind(this);
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    componentDidMount(){
        if(localStorage.getItem('_id') === null ){
            this.props.history.push('/');
        }else {
            ConferenceService.getconferenceById(this.state.id).then((res) => {
                let conference = res;
                console.log(conference);
                this.setState({
                    creator: conference.creator,
                    conference_title: conference.conference_title,
                    message: conference.message,
                    status: conference.status,
                    postedDate: conference.postedDate

                });
            });
        }
    }


    updateConference=(e)=>{

        e.preventDefault();
        let conference ={creator: this.state.creator,conference_title: this.state.conference_title,message: this.state.message,status: this.state.status,postedDate: this.state.postedDate};
        console.log('conference => '+JSON.stringify(conference));
        console.log('id => ' + JSON.stringify(this.state.id));
        ConferenceService.updateconference(this.state.id,conference).then( res => {
            this.props.history.push('/list-ContentView');
        });

    }
    cancel(){
        this.props.history.push('/conference');
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row" >
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Update Conference</h3>


                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Creator's  Name :</label>
                                        <input disabled placeholder="creator" name="creator" className="form-control"
                                               value={this.state.creator} onChange ={event=>this.onChange(event)}/>

                                    </div>
                                    <div className="form-group">
                                        <label> Conference Title:</label>
                                        <input disabled placeholder="conference_title" name="conference_title" className="form-control"
                                               value={this.state.conference_title} onChange ={event=>this.onChange(event)}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Message :</label>
                                        <input placeholder="message" name="message" className="form-control"
                                               value={this.state.message} onChange ={event=>this.onChange(event)}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Status :</label>
                                        <input disabled value="Pending"  placeholder="status" name="status" className="form-control"
                                               />

                                    </div>

                                    <div className="form-group">
                                        <label>Conference Date & Time:</label>
                                        <input  placeholder="postedDate" name="postedDate" className="form-control"
                                               value={this.state.postedDate} onChange ={event=>this.onChange(event)}/>

                                    </div>

                                        <button className="btn btn-success" onClick = {this.updateConference}> Save </button>
                                        <button className="btn btn-danger" onClick = {this.cancel.bind(this)} style ={{marginLeft: "10px"}}> Cancel </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default EditConferenceComponent;