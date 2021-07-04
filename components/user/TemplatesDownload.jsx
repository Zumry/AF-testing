import React, {Component} from 'react';
import '../../styles/user/TemplatesDownload.css';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

const files =[
    {
        name: "Research paper Template",
        URL: "https://afprouploadfiles.s3.ap-south-1.amazonaws.com/IEEE_conference_template.docx",
    },{
        name: "Sample workshop Template",
        URL: "https://afprouploadfiles.s3.ap-south-1.amazonaws.com/Sample+Research+Workshop+Proposal.pdf",
    },{
        name: "IEEE Research paper Template",
        URL: "https://afprouploadfiles.s3.ap-south-1.amazonaws.com/IEEE_conference_template.docx",
    },{
        name: "Event Proposal Template",
        URL: "https://afprouploadfiles.s3.ap-south-1.amazonaws.com/Sample+Research+Workshop+Proposal.pdf",
    }
];

class TemplatesDownload extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <div>
            <div className={"Templates-section"}>
                <div className={"Templates-container"}>

                    <div className={"Templates-row"}>
                        <div className={"Templates-section-title"}>
                            <h2 className={"Templates-custom-underline"}>Templates</h2>
                        </div>
                    </div>

                    {/*Download Templates items */}
                    <div className={"Templates-row"}>

                        {files.map((file, idx) => (
                            <div className={"Templates-item"}>
                                <div className={"Templates-item-inner outer-shadow-temp"}>
                                    <h3> {file.name} </h3>
                                    <a href={file.URL} target="_blank" > <button className={"Download-btn"} > Download </button> </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    }
}

export default TemplatesDownload;