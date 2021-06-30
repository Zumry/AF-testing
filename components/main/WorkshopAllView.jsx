import React from 'react';
import WorkShopServices from "../../services/WorkShopServices";
import WorkshopAllViewListHolder from "./WorkshopAllViewListHolder";
import '../../styles/WebView.css';
import ConferenceService from "../../services/ConferenceService";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


class WorkShopAllView extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            Workshops:[],
            WorkshopsCont:[],

            newWorkshops:[]
        }
    }

    /**
     * Mounting Workshop proposal submission of the relevant user to view
     */
    componentDidMount() {
        /**
         * Retrieve All the workshop details
         */
       WorkShopServices.getWorkShop()
            .then(workShop => {
                this.setState({Workshops:workShop})})
            .catch(err => console.error(err));

        /**
         * Retrieve All the workshop details
         */
        ConferenceService.getConference()
            .then(WorkshopsCont => {
                this.setState({WorkshopsCont:WorkshopsCont})})
            .catch(err => console.error(err));

        this.filterDetails(this.state.Workshops,this.state.WorkshopsCont)
    }

    filterDetails(Workshops,workshopContent){
        let tempArray = [];
        workshopContent.map(workshopC => {
            if(workshopC.status === 'Approved'){
                Workshops.map(workshop =>{
                    if(workshopC.workshopId === workshop._id){
                        let NewWorkshop = {
                            _id:workshop._id,
                            workShopTitle:workshop.workShopTitle,
                            conductorNames:workshop.conductorNames,
                            affiliation:workshop.affiliation,
                            email:workshop.email,
                            postedDate:workshopC.postedDate
                        }
                        tempArray.push(NewWorkshop)
                    }
                })
            }
        })

        this.setState({newWorkshops:tempArray})
    }


    render() {
        return <div>
            <div id={'divisionColor'} style={{height:'auto'}}>
                <div className={'box'}>
                    <label className={'custom-underline'}>Workshop</label>
                </div>
                <div>
                    {
                        this.state.newWorkshops.map(workshop => {
                            console.log(workshop)
                            return <WorkshopAllViewListHolder key={workshop._id} Workshop={workshop}/>
                        })
                    }
                </div>
                <div id={'divisionColor'} style={{height: '40px'}}/>
            </div>
        </div>
    }
}

export default WorkShopAllView;