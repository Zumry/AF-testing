import React from "react";
import '../../styles/WebView.css'

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class WorkshopSubmission extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div id={'bigDivision'}>
                <div className={'box'}>
                    <label className={'custom-underline'}>WORKSHOP SUBMISSION</label>
                </div>
                <div>
                    <div id={'workTopicDiv'}>
                        <label className={'conTopic'}>Submission Guideline</label>
                        <div>
                            <div className={'listDiv'}>
                                <ul className={'topicList'}>
                                    <li>First Register and Login to the System</li>
                                    <li>Go to the Workshop Registration Page</li>
                                    <li>Provide Workshop Organizer Details (names, affiliation, and contact information)</li>
                                    <li>Provide Workshop Conductor Names </li>
                                    <li>Attach the Workshop Proposal Document</li>
                                    <li>Submit the Workshop Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div id={'workTopicDiv'}>
                        <label className={'conTopic'}>Workshop Proposal Document Format</label>
                        <div>
                            <div className={'listDiv'}>
                                <ul className={'topicList'}>
                                    <li>Workshop Organizer Details (names, affiliation, and contact information)</li>
                                    <li>Workshop Conductors Details (names, affiliation, and contact information)</li>
                                    <li>Scope and topics of the workshop</li>
                                    <li>A short biography of the conductors (up to 160 words per conductor)</li>
                                    <li>Names of potential participants, such as program committee members and invited speakers</li>
                                    <li>Planned format of the workshop, including
                                        <ul>
                                            <li>Duration of the workshop: Half-day or Full-day</li>
                                            <li>Preferred day of workshop</li>
                                            <li>Unique, creative and novel workshops formats are strongly encouraged</li>
                                            <li>Number of refereed papers, hot topic sessions, keynotes, panels</li>
                                        </ul>
                                    </li>
                                    <li>Draft Call for Papers (max 2 page)</li>
                                    <li>A description of the publicity and promotion plan</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <label className={'noteLabel'}>*Please note that All Workshop proposal submissions will be checked for plagiarism.</label>
                </div>
                <div style={{height:'50px'}}></div>
            </div>
        </div>
    }
}

export default WorkshopSubmission;