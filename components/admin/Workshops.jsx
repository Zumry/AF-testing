import React, { Component } from 'react';
import ConferenceService from "../../Services/ConferenceService";
import WorkShopServices from "../../services/WorkShopServices";
import '/styles/admin/Conference.css';
/*
*  IT 19167442
*  Author Nusky M.A.M
* */

class Workshops extends Component {

    constructor(props){
        super(props)

        this.state={
            workshops:[],
            conferences:[]
        }
    }

    deleteconference(id){
        ConferenceService.deleteconference(id).then( res => {
            this.setState({conferences: this.state.conferences.filter(conference => conference.id !== id)});
        });
    }

    componentDidMount(){
        if(localStorage.getItem('_id') === null ){
            this.props.history.push('/');
        }else {
            WorkShopServices.getWorkShop().then(res => {
                this.setState({workshops: res});
            });
        }
    }

    createconferencecontent(workshop){
        console.log(workshop);
        this.props.history.push(`/add-conference/${workshop._id}/${workshop.presenterName}/${workshop.workShopTitle}`);
    }

    //Admin
    approveconference(){
        this.props.history.push('approve-conference/_add');
    }

    displayconference(){
        this.props.history.push('display-conference/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Conference Content  List </h2>
                <div className= "row">

                </div>
                <br></br>
                <div className="row">

                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th> Creator</th>
                            <th> Conference Title </th>

                        </tr>

                        </thead>

                        <tbody>
                        {
                            this.state.workshops.map(

                                workshop =>
                                    workshop.proposalStatus === 'Approved' ?(
                                        <tr>
                                        <td>   {workshop.presenterName} </td>
                                        <td> {workshop.workShopTitle}</td>

                                            <td>
                                                <button onClick={ () => this.createconferencecontent(workshop)} className="btn btn-info">Create Conference Content </button>

                                            </td>
                                        </tr>
                                        ):( <> </>)
                            )

                        }

                        </tbody>

                    </table >

                </div>
            </div>
        )
    }
}
export default Workshops;
