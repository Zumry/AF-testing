import React, {Component} from 'react';
import '../../styles/user/TemplatesDownload.css';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

const files =[
    {
        name: "Photo 1",
        file: "International Conference on Application Frameworks 11.",
        filename: "photo-1.jpg",

    },
    {
        name: "Photo 2",
        file:
            "International Conference on Application Frameworks 22.",
        filename: "photo-2.jpg",
    },
    {
        name: "Photo 3",
        file:
            "International Conference on Application Frameworks 333.",
        filename: "photo-2.jpg",
    },{
        name: "Photo 4",
        file:
            "International Conference on Application Frameworks 44.",
        filename: "photo-2.jpg",
    },
    {
        name: "Photo 5",
        file:
            "International Conference on Application Frameworks 55.",
        filename: "photo-2.jpg",
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
                                    <p> {file.file} </p>
                                    <button className={"Download-btn"}> Download </button>
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