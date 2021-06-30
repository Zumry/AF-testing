import React from "react";
import '../../styles/WebView.css'

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class PaperSubmission extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div id={'bigDivisionPs'}>
                <div className={'box'}>
                    <label className={'custom-underline'}>RESEARCH PAPER SUBMISSION</label>
                </div>
                <div>
                    <div id={'workTopicDiv'}>
                        <label className={'conTopic'}>Submission Guideline</label>
                        <div>
                            <div className={'listDiv'}>
                                <ul className={'topicList'}>
                                    <li>First Register as Researcher and Login to the System</li>
                                    <li>Go to the Research Paper Registration Page</li>
                                    <li>Provide Author Details (names, email, and contact information)</li>
                                    <li>Attach the Research Paper Document</li>
                                    <li>Submit the Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div id={'paperSubDiv'}>
                        <label className={'conTopic'}>Important</label>
                        <div>
                            <div className={'listDiv'}>
                                <ul className={'topicList'}>
                                    <li>All papers should be written in English</li>
                                    <li>The page length limit for all initial submissions for review is 6 printed pages with font size of 10</li>
                                    <li>Download template form the following page while preparing full papers
                                        <ul>
                                            <li><a href={'#'}>Conference Templates Download</a></li>
                                        </ul>
                                    </li>
                                    <li>Paper selection is subjected to the contribution, originality, relevance, technical strength, and the overall quality.
                                        Upon selection of the paper, at least one author is expected to register for the conference before the deadline and present the paper</li>
                                    <li>All submissions will undergo a plagiarism check using a suitable tool</li>
                                    <li>Please contact us, if you have any questions regarding your submission or experience any issues while submitting your Paper</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div id={'aFeeTopicDiv'}>
                        <label className={'conTopic'}>Fee to Present Paper</label>
                        <div>
                            <div className={'listDiv'}>
                                <ul className={'topicList'}>
                                    <li>For the Students and IEEE Member Fee Rs.30000/=</li>
                                    <li>For the Non Student and Non IEEE Member Fee Rs.40000/=</li>
                                    <li>For the Students Fee Rs.35000/=</li>
                                    <li>For the Non Student Fee Rs.40000/=</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{height:'20px'}}></div>
            </div>
        </div>
    }
}

export default PaperSubmission;