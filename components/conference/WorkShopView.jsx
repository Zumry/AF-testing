import React from 'react';
import '../../styles/conference/ResearchWorkshopView.css'
import WorkshopViewListHolder from "./WorkshopViewListHolder";
import WorkShopServices from "../../services/WorkShopServices";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


class WorkShopView extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            Workshops:[]
        }

    }

    /**
     * Mounting Workshop proposal submission of the relevant user to view
     */
    componentDidMount() {
        if(localStorage.getItem('_id') === null && localStorage.getItem('type') !== 'WorkshopConductor'){
            this.props.history.push('/');
        }else {
            WorkShopServices.getWorkShopByUser(localStorage.getItem('_id'))
                .then(workShop => {
                    this.setState({Workshops: workShop})
                })
                .catch(err => console.error(err));
        }
    }
    /**
     * this method is to redirect to the update page for edit Workshop proposal submission
     */
    editSubmission(workshop){
        const id = workshop._id;
        this.props.history.push(`/updateWorkShop/${id}`);
    }

    render() {
        return <div id={'divisionColor'}>
            <div>
                <div className={'box'}>
                    <label className={'custom-underline'}>Workshop Submissions</label>
                </div>
            </div>
            <div>
                {
                    this.state.Workshops.map(workshop => {
                        return <WorkshopViewListHolder key={workshop._id} Workshop={workshop}
                                                       editSubmission={workshop => this.editSubmission(workshop)}/>
                    })
                }
            </div>
            <div style={{height: '30px'}}/>
        </div>
    }
}

export default WorkShopView;