import React from "react";
import '../../styles/WebView.css'


/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class AttendeesRegistration extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div  id={'divisionColor'} style={{height:'700px'}}>
                <div className={'box'}>
                    <label className={'custom-underline'}>ATTENDEES REGISTRATION</label>
                </div>
                <div>
                    <div id={'workTopicDiv'}>
                        <label className={'conTopic'}>Registration Guideline</label>
                        <div>
                            <div className={'listDiv'}>
                                <ul className={'topicList'}>
                                    <li>First Register and Login to the System</li>
                                    <li>Go to the By Ticket Page</li>
                                    <li>Provide the necessary payment information</li>
                                    <li>Submit payment information</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div id={'attRTopicDiv'} >
                        <label className={'conTopic'}>Registration Fee</label>
                        <div>
                            <div className={'listDiv'}>
                                <ul className={'topicList'}>
                                    <li>For the SLIIT Students Fee Rs.1500/=</li>
                                    <li>For the Other Students Fee Rs.2000/=</li>
                                    <li>For the SLIIT Students and IEEE Member Fee Rs.1000/=</li>
                                    <li>For the Other Students and IEEE Member Fee Rs.1200/=</li>
                                    <li>For the Non Students Fee Rs.2000/=</li>
                                    <li>For the Non Student and IEEE Member Fee Rs.1700/=</li>
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

export default AttendeesRegistration;