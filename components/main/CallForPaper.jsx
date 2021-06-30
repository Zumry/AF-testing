import React from "react";
import '../../styles/WebView.css'

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class CallForPaper extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div id={'bigDivision'}>
                <div className={'box'}>
                    <label className={'custom-underline'}>CALL FOR PAPER</label>
                </div>
                <div className={'paraDiv'}>
                    <p className={'discPara'}>
                        The 2021 International Conference on Application Frameworks (ICAF 2021) will be held in Sri Lanka from 7th to 9th July 2021.
                        The ICAF 2021 is themed “Latest findings and implementations of different programming languages.”
                        ICAF 2021 will include attractive workshops and programs aimed at practitioners,
                        with keynotes and panels from both local and international researchers.
                    </p>
                </div>
                <div id={'topicDiv'}>
                    <label className={'conTopic'}>Conference topics</label>
                    <div>
                        <div className={'listDiv'}>
                            <ul className={'topicList'}>
                                <li>New finding on Java </li>
                                <li>New finding on JavaScript </li>
                                <li>New finding on Python </li>
                                <li>New finding on C# </li>
                                <li>New finding on Ruby </li>
                                <li>New finding on C++ </li>
                                <li>New finding on Php </li>
                                <li>New finding on Swift </li>
                            </ul>
                        </div>
                        <div className={'listDiv'}>
                            <ul className={'topicList'}>
                                <li>New finding on SQL </li>
                                <li>New finding on PostgreSQL </li>
                                <li>New finding on R </li>
                                <li>New finding on XML </li>
                                <li>New finding on Pascal</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <label id={'subTopic'}>Submission:</label>
                    <div id={"subMDiv"}>
                        <p id={'subPara'}>
                            To be published in the ICAF 2021 Conference Proceedings,
                            an author of an accepted paper is required to register for the conference and the paper must be presented by an author of that paper at the conference.
                            During the initial paper submission process the submitted papers will be reviewed and will be approved or reject by the Reviewer.
                            if a research paper is approved the author of that research paper must pay to present the paper at Conference and
                            if a research paper is rejected the author can make change and submit the paper again.
                            Only PDF files will be accepted for the review process.
                            Author List and their affiliations should be removed from the initial PDF File.
                        </p>
                    </div>
                </div>
                <div>
                    <label className={'noteLabel'}>*Please note that Literature Survey/Review papers will not be accepted.
                        All papers submitted will be checked for plagiarism.</label>
                </div>
            </div>
        </div>
    }
}

export default CallForPaper;