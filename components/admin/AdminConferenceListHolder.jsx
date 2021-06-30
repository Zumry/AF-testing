import React from 'react';

/*
*  IT 19167442
*  Author Nusky M.A.M
* */
export default function AdminConferenceListHolder(props) {
    const {conference, approveconference, viewconference,rejectconference} = props;

    return <div className={'RWItem-style-view'}>
        <table>
            <thead>
            <tr>
                <th colSpan={2}><label id={'pTitle'}>{conference.conference_title}</label></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={'resTag'}>Presenter Name</td>
                <td className={'resTd'}>: {conference.creator}</td>
            </tr>
            <tr>
                <td>Message</td>
                <td className={'resTd'}>: {conference.message}</td>
            </tr>

            <tr>
                <td>Conference Date</td>
                <td className={'resTd'}>: {conference.postedDate}</td>
            </tr>

            <tr>
                <td colSpan={2}>
                    <button className={'btnView'} onClick={() => viewconference(conference)}>View Conference</button>
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    {
                        conference.status === 'Approved'?
                            (<span id={'stateS'}>States : Approved</span>)
                            :(
                                <div>
                                    <button className={'btnAccept'} onClick={() => approveconference(conference)}>Approve</button>
                                    <button className={'btnDecline'} onClick={() => rejectconference(conference)}>Reject</button>
                                </div>
                            )
                    }
                </td>
            </tr>
            </tbody>
        </table>
    </div>
}