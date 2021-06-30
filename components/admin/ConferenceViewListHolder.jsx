import React from 'react';
import '../../styles/admin/editorconferenceview.css'
/*
*  IT 19167442
*  Author Nusky M.A.M
* */
export default function ConferenceViewListHolder(props) {
    const {Conference, editSubmission} = props;

    return <div className={'RItem-style-view'}>
        <table>
            <thead>
            <tr>
                <th colSpan={3}><label id={'pTitle'}>{Conference.conference_title}</label></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={'resTag'}>Creator Name</td>
                <td className={'resTd'}>: {Conference.creator}</td>
                <td><span id={'statCol'}> Status</span> : {Conference.status}</td>
            </tr>
            <tr>
                <td>Message</td>
                <td className={'resTd'}>: {Conference.message}</td>
                <td rowSpan={4} id={'btnTag'}><button id={'btnWork'} onClick={() => editSubmission(Conference)}>Edit Submission</button></td>
            </tr>

            <tr>
                <td> Date</td>
                <td className={'resTd'}>: {Conference.postedDate}</td>
            </tr>

            </tbody>
        </table>
    </div>
}