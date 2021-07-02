import React from 'react';
import '../../styles/conference/ResWorkResearcherView.css'
import ReviewerResearchListHolder from "./ReviewerResearchListHolder";
import ResearchPaperServices from "../../services/ResearchPaperServices";
import {toast} from "react-toastify";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

/* configuring options to display toast message */
const options = {
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar:true,
    autoClose:6000,
    closeButton:false,
    className:'Toastify__toast-containerBig'
}

class ReviewerResearchView extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            researchPapers:[]
        }
    }

    /**
     * Mounting All Research paper submission details to view
     */
    componentDidMount() {
        if(localStorage.getItem('_id') === null && localStorage.getItem('type') !== 'Reviewer'){
            this.props.history.push('/');
        }else {
            ResearchPaperServices.getResearchPaper()
                .then(researchPaper => {
                    this.setState({researchPapers: researchPaper})
                })
                .catch(err => console.error(err));
        }
    }

    /**
     * this method is to handle if the Reviewer approve Research paper submission
     */
    approvePaper(research){
        let id = research._id;
        let approval = {aStatus:"Approved"}
        ResearchPaperServices.researchPaperApproval(id,approval)
            .then(response =>{
                let researchPaper = response;
                if(researchPaper.submissionStatus === "Approved"){
                    toast.success(`Research paper ${research.paperTitle} submission is Approved`,options)
                }else{
                    toast.error(`Something went wrong, try again!!`,options)
                }
        })
        setTimeout(function () {
            window.location.reload();
        }, 7000);
    }

    /**
     * this method is to handle if the Reviewer reject Research paper submission
     */
    rejectPaper(research){
        let id = research._id;
        let approval = {aStatus:"Rejected"}
        ResearchPaperServices.researchPaperApproval(id,approval)
            .then(response =>{
                let researchPaper = response;
                if(researchPaper.submissionStatus === "Rejected"){
                    toast.error(`Research paper ${research.paperTitle} submission is Rejected`,options)
                }else{
                    toast.warning(`Something went wrong, try again!!`,options)
                }
            })

        setTimeout(function () {
            window.location.reload();
        }, 7000);
    }

    render() {
        return <div id={'divisionColor'}>
            <div>
                <div className={'box'}>
                    <label className={'custom-underline'}>Research Paper Submissions</label>
                </div>
            </div>
            <div>
                {
                    this.state.researchPapers.map(researchPaper =>{
                        return <ReviewerResearchListHolder key={researchPaper._id} ResearchPaper={researchPaper}
                                                           approvePaper={researchPaper => this.approvePaper(researchPaper)}
                                                           rejectPaper={researchPaper => this.rejectPaper(researchPaper)}/>
                    })
                }
            </div>
            <div style={{height: '30px'}}/>
        </div>
    }
}

export default ReviewerResearchView;