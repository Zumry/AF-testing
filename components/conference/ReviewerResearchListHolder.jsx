import React from "react";
import '../../styles/conference/ResWorkResearcherView.css'

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

export default function ReviewerResearchListHolder(props){
    const {ResearchPaper, approvePaper,rejectPaper} = props;

    return <div className={'RWItem-style-view'}>
        <table>
            <thead>
            <tr>
                <th colSpan={2}><label id={'pTitle'}>{ResearchPaper.paperTitle}</label></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={'resTag'}>Author Name</td>
                <td className={'resTd'}>: {ResearchPaper.authorName}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td className={'resTd'}>: {ResearchPaper.email}</td>
            </tr>
            <tr>
                <td>Submitted Date</td>
                <td className={'resTd'}>: {ResearchPaper.submittedDate}</td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <a className={'btnView'} href={ResearchPaper.researchPFileLocation}>View Research Paper</a>
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    {
                        ResearchPaper.paymentStatus === 'Not Available' && ResearchPaper.submissionStatus === 'Approved'?
                            (<span id={'stateS'}>States : Approved</span>)
                        :ResearchPaper.paymentStatus === 'Payment paid' && ResearchPaper.submissionStatus === 'Approved'?
                            (<span id={'stateS'}>States : Approved</span>)
                        :(
                            <div>
                                <button className={'btnAccept'} onClick={() => approvePaper(ResearchPaper)}>Approve</button>
                                <button className={'btnDecline'} onClick={() => rejectPaper(ResearchPaper)}>Reject</button>
                            </div>
                        )
                    }
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    {
                        ResearchPaper.paymentStatus === 'Not Available' && ResearchPaper.submissionStatus === 'Approved'?
                            (<span id={'stateS'}>Payment : Not paid</span>)
                            :ResearchPaper.paymentStatus === 'Payment paid' && ResearchPaper.submissionStatus === 'Approved'?
                            (<span id={'stateS'}>Payment : Paid</span>)
                            :(<></>)
                    }
                </td>
            </tr>
            </tbody>
        </table>
    </div>
}