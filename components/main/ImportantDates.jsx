import React from "react";
import '../../styles/WebView.css'

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class ImportantDates extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div id={'divisionColor'}>
                <div className={'box'}>
                    <label className={'custom-underline'}>IMPORTANT DATES</label>
                </div>
                <div>
                    <div id={'iDateDiv'}>
                        <div>
                            <div className={'listDiv'}>
                                <ul className={'topicList'}>
                                    <li><span className={'iDateText'}>Proposals for Special Sessions</span>: JAN 05, 2021</li>
                                    <li><span className={'iDateText'}>Workshop Proposal Submission</span>: FEB 07, 2021</li>
                                    <li><span className={'iDateText'}>Paper Submission</span>: Feb 28, 2021 March 05, 2021 March 20, 2021</li>
                                    <li><span className={'iDateText'}>Acceptance Notification</span>: May 22, 2021 June 10, 2021 June 19, 2021</li>
                                    <li><span className={'iDateText'}>Registration and Publication Fee</span>: June 19, 2021 July 25, 2021</li>
                                    <li><span className={'iDateText'}>ICAF 2021 Conference</span>: July 7 - 9, 2021</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{height:'50px'}}></div>
            </div>
        </div>
    }
}

export default ImportantDates;