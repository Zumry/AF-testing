import React from 'react';
import '../../styles/conference/ResearchWorkshopView.css'

export default function WorkshopViewListHolder(props) {
    const {Workshop, editSubmission} = props;

    return <div className={'RItem-style-view'}>
        <table>
            <thead>
            <tr>
                <th colSpan={3}><label id={'pTitle'}>{Workshop.workShopTitle}</label></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={'resTag'}>Presenter Name</td>
                <td className={'resTd'}>: {Workshop.presenterName}</td>
                <td><span id={'statCol'}>Submission Status</span> : {Workshop.proposalStatus}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td className={'resTd'}>: {Workshop.email}</td>
                <td rowSpan={4} id={'btnTag'}><button id={'btnWork'} onClick={() => editSubmission(Workshop)}>Edit Submission</button></td>
            </tr>
            <tr>
                <td>Affiliation</td>
                <td className={'resTd'}>: {Workshop.affiliation}</td>
            </tr>
            <tr>
                <td>Contact Number</td>
                <td className={'resTd'}>: {Workshop.contactNumber}</td>
            </tr>
            <tr>
                <td>Submitted Date</td>
                <td className={'resTd'}>: {Workshop.submittedDate}</td>
            </tr>
            <tr>
                <td>View Workshop Document</td>
                <td className={'resTd'}><a className={'linkButton'} target={'_blank'} href={Workshop.fileLocation}>View</a></td>
            </tr>
            </tbody>
        </table>
    </div>
}