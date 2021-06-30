import React from "react";
import '../../styles/conference/ResearchWorkshopView.css'

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

export default function ResearchViewListHolder(props){
    const {Research, editSubmission, researchSubPayment } = props;

    return <div className={'RItem-style-view'}>
        <table>
            <thead>
            <tr>
                <th colSpan={3}><label id={'pTitle'}>{Research.paperTitle}</label></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={'resTag'}>Author Name</td>
                <td className={'resTd'}>: {Research.authorName}</td>
                <td><span id={'statCol'}>Submission Status</span> : {Research.submissionStatus}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td className={'resTd'}>: {Research.email}</td>
                {
                    Research.paymentStatus === 'Payment paid' && Research.submissionStatus === 'Approved'?
                        (<td rowSpan={3} id={'btnTag'}><span id={'payCol'}>Payment</span><span id={'approval'}> : Paid</span></td>)
                    :Research.paymentStatus === 'Not Available' && Research.submissionStatus === 'Approved'?
                        (<td rowSpan={3} id={'btnTag'}><button id={'btnPayment'} onClick={() => researchSubPayment(Research)}>Pay to Present</button></td>)
                    :(<td rowSpan={3} id={'btnTag'}><button id={'btnPaper'} onClick={() => editSubmission(Research)}>Edit Submission</button></td>)
                }
            </tr>
            <tr>
                <td>Submitted Date</td>
                <td className={'resTd'}>: {Research.submittedDate}</td>
            </tr>
            <tr>
                <td>View Research Paper</td>
                <td className={'resTd'}><a className={'linkButton'} target={'_blank'} href={Research.researchPFileLocation}>View</a></td>
            </tr>
            </tbody>
        </table>
    </div>
}