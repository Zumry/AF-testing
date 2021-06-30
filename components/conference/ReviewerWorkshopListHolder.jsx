import React from 'react';
import '../../styles/conference/ResWorkResearcherView.css'

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

export default function ReviewerWorkshopListHolder(props) {
    const {Workshop, approveWorkshop,rejectWorkshop} = props;

    return <div className={'RWItem-style-view'}>
        <table>
            <thead>
            <tr>
                <th colSpan={2}><label id={'pTitle'}>{Workshop.workShopTitle}</label></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={'resTag'}>Presenter Name</td>
                <td className={'resTd'}>: {Workshop.presenterName}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td className={'resTd'}>: {Workshop.email}</td>
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
                <td>Conductors Names</td>
                <td className={'resTd'}>: {
                    Workshop.conductorNames.map(names =>{
                            return names+", "
                        }
                    )
                }</td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <a className={'btnView'} href={Workshop.fileLocation}>View Proposal Document</a>
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    {
                        Workshop.proposalStatus === 'Approved'?
                            (<span id={'stateS'}>States : Approved</span>)
                        :(
                            <div>
                                <button className={'btnAccept'} onClick={() => approveWorkshop(Workshop)}>Approve</button>
                                <button className={'btnDecline'} onClick={() => rejectWorkshop(Workshop)}>Reject</button>
                            </div>
                         )
                    }
                </td>
            </tr>
            </tbody>
        </table>
    </div>
}