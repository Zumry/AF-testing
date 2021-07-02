import React from 'react';
import AdminApproveOrRejectComponent from "./AdminApproveOrRejectComponent";
import ConferenceService from "../../Services/ConferenceService";
import '/styles/admin/AdminApproval.css';
/*
*  IT 19167442
*  Author Nusky M.A.M
* */

class AdminWorkshopView extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            Conferences:[]
        }
    }

    /**
     * Mounting All Workshop proposal submission details to view
     */
    componentDidMount() {
        if(localStorage.getItem('_id') === null && localStorage.getItem('type') !== 'Administrator' ){
            this.props.history.push('/');
        }else {
            ConferenceService.getConference()
                .then(Conference => {
                    this.setState({Conferences: Conference})
                })
                .catch(err => console.error(err));
        }
    }

    /**
     * this method is to handle if the Editor approve Conference proposal
     */
    approveconference(conference){
        let id = conference._id;
        let approval = {aStatus:"Approved"}
        ConferenceService.ConferenceApproval(id,approval)
            .then(response =>{
                let conf = response;
                if(conf.status=== "Approved"){
                    /**
                     * TODO:display the message appropriately
                     */
                    console.log("Approved")
                }else{
                    /**
                     * TODO:display the message appropriately
                     */
                    console.log("Something went wrong, try again!!")
                }
            })
    }

    /**
     * this method is to handle if the Editor want to view Conference
     */
    viewconference(conference){

    }

    /**
     * this method is to handle if the Editor reject Conferences
     */
    rejectconference(conference){
        let id = conference._id;
        let approval = {aStatus:"Rejected"}
        ConferenceService.ConferenceApproval(id,approval)
            .then(response =>{
                let conf = response;
                if(conf.status === "Rejected"){
                    /**
                     * TODO:display the message appropriately
                     */
                    console.log("Rejected")
                }else{
                    /**
                     * TODO:display the message appropriately
                     */
                    console.log("Something went wrong, try again!!")
                }
            })
    }

    render() {
        return <div>
            <div><label id={'RVHeadLine'} >All Proposed Conferences</label></div>
            <div>
                {
                    this.state.Conferences.map(conference => {
                        return <AdminApproveOrRejectComponent key={conference._id} conference={conference}
                                                           approveconference={conference => this.approveconference(conference)}
                                                           rejectconference={conference => this.rejectconference(conference)}
                                                           viewconference={conference => this.viewconference(conference)}/>
                    })
                }
            </div>
        </div>
    }
}

export default AdminWorkshopView;