import React, { Component } from 'react';
import ConferenceService from "../../Services/ConferenceService";
import '../../styles/toast.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify"
toast.configure()

/*
*  IT 19167442
*  Author Nusky M.A.M
* */
class CreateConferenceComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            creator: this.props.match.params.name,
            conference_title:this.props.match.params.title,
            message:'',
            status:'Pending',
            postedDate:''

        }
        this.changecreatorHandler = this.changecreatorHandler.bind(this);
        this.changeconference_titleHandler = this.changeconference_titleHandler.bind(this);
        this.changemessageHandler = this.changemessageHandler.bind(this);
        this.changestatusHandler = this.changestatusHandler.bind(this);
        this.changepostedDateHandler = this.changepostedDateHandler.bind(this);
        this.saveConference = this.saveConference.bind(this);
    }

    componentDidMount() {
        if(localStorage.getItem('_id') === null && localStorage.getItem('type') !== 'Editor'){
            this.props.history.push('/');
        }
    }


    getworkshop(id){
        this.props.history.push(`/get-workshop/${id}`);
    }

    saveConference =(e)=>{

        e.preventDefault();
        let conference ={
            workshopId:this.state.id,
            creator: this.state.creator,
            conference_title: this.state.conference_title,
            message: this.state.message,
            status: this.state.status,
            postedDate: this.state.postedDate
        };

        ConferenceService.createconference(conference, this.state.id).then( res => {
            toast.success("Conference Content Submitted Successfully",options)
            this.props.history.push('/display');

        });

       const options = {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar:true,
            autoClose:3000,
            closeButton:false
        }

        /**
         * Validating the Research Paper submission input fields
         * Displaying Error message if any input field is empty
         */
      /*  if(conference.creator === ''){
            toast.warning("Fill the Creator's Name", options)
        }else if (conference.conference_title === ''){
            toast.warning("Fill Conference Content Title", options)
        }else if (conference.message === ''){
            toast.warning("Fill Message", options)
        }else if (conference.status === ''){
            toast.warning("Fill Status", options)
        } else if (conference.postedDate === ''){
            toast.warning("Fill PostedDate", options)
        }else{
            console.log(JSON.stringify(conference));
            ConferenceService.createconference(conference)
                .then(res => {
                    if(res.status === 200){
                        toast.success("Conference Content Submitted Successfully",options)
                        this.props.history.push('/list-ContentView');
                    }else{
                        toast.error("Something went wrong!!,Try again.",options)
                    }
                })
        }*/

    }


    changecreatorHandler= (event) =>{
        this.setState({workshopId: event.target.value});
    }

    changecreatorHandler= (event) =>{
        this.setState({creator: event.target.value});
    }
    changeconference_titleHandler= (event) =>{
        this.setState({conference_title: event.target.value});
    }
    changemessageHandler= (event) =>{
        this.setState({message: event.target.value});
    }
    changestatusHandler= (event)  =>{
        this.setState({status: event.target.value});
    }
    changepostedDateHandler= (event) =>{
        this.setState({postedDate: event.target.value});
    }

    cancel(){
        this.props.history.push('/conferences');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Conference</h3>
        }else{
            return <h3 className="text-centerTitle">Create Conference</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row" >
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Creator's  Name :</label>
                                        <input disabled placeholder="creator" name="creator" className="form-control"
                                               value={this.state.creator} onChange ={this.changecreatorHandler}/>

                                    </div>
                                    <div className="form-group">
                                        <label> Conference Title:</label>
                                        <input disabled placeholder="conference_title" name="conference_title" className="form-control"
                                               value={this.state.conference_title} onChange ={this.changeconference_titleHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Message :</label>
                                        <input placeholder="message" name="message" className="form-control"
                                               value={this.state.message} onChange ={this.changemessageHandler}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Status :</label>
                                        <input disabled value="Pending"  placeholder="status" name="status" className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Conference Date & Time:</label>
                                        <input placeholder="postedDate" name="postedDate" className="form-control"
                                               value={this.state.postedDate} onChange ={this.changepostedDateHandler}/>

                                    </div>




                                    <button className="btn btn-success" onClick={this.saveConference}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>


                                </form>

                            </div>
                        </div>

                    </div>
                </div>
                <div style={{marginTop:'30px'}}></div>
            </div>
        )
    }
}

export default CreateConferenceComponent;