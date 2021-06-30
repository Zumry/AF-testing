import React from "react";
import BG1 from 'url:../images/home/BG1.jpg'
import BG2 from 'url:../images/home/BG2.jpg'
import BG3 from 'url:../images/home/BG3.jpg'
import BG4 from 'url:../images/home/BG4.jpeg'
import '../styles/Home.css';
import "aos/dist/aos.css";
import AOS from 'aos';

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class Home extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        AOS.init();
        return <div>
            <div className={'wrapperImg'}>
                <div className={'divImage'}></div>
                <div className={'divText'}>International Conference on Application Frameworks</div>
                <div className={'divText2'}>7th,8th and 9th July 2021</div>
                <div className={'divText3'}>Sri Lanka Institute of Information Technology, Sri Lanka</div>
            </div>

            <div className={'aboutDiv'}>
                <label id={'aboutCon'}>ABOUT THE CONFERENCE</label>
                <p id={'para'}>
                    The International conference on Application Frameworks -2021 (ICAF2021) is organized by the
                    Faculty of Computing of the Sri Lanka Institute of Information Technology (SLIIT) as an open forum
                    for academics along with industry professionals to present the latest findings and research output
                    and practical deployments in the Programming Languages domains.
                    Primary objective of the ICAF is to uplift the research culture and the quality of research done by
                    Sri Lankan researchers.
                    This conference will create a platform for national and international researchers to showcase their
                    research output, networking opportunities to discuss innovative ideas, and initiate collaborative
                    work.
                </p>
            </div>
            <div id={'cardDiv'} data-aos={'fade-up'}>
                <div>
                    <div className={'box'}>
                        <label className={'custom-underline'}>KEY NOTE SPEAKERS</label>
                    </div>
                    <div id={'cardInsideDiv'}>
                        <div className={'cardImg'} data-aos={'fade-up'}>
                            <div className={'info'}>
                                <h1 className={'title'}>Prof. John Beyers</h1>
                                <p className={'description'}>University of Maryland, Land-grant university in College Park,
                                    Maryland</p>
                            </div>
                        </div>
                        <div className={'cardImg2'} data-aos={'fade-up'}>
                            <div className={'info2'}>
                                <h1 className={'title'}>Prof. Douglas Klutz</h1>
                                <p className={'description'}>University of Alabama,Tuscaloosa, AL 35487, United States</p>
                            </div>
                        </div>
                        <div className={'cardImg3'} data-aos={'fade-up'}>
                            <div className={'info3'}>
                                <h1 className={'title'}>Prof. Jack Epps</h1>
                                <p className={'description'}>University of Southern California,Los Angeles,
                                    CA 90007, United States</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" >
                <div className={'box'}>
                    <label className={'custom-underline'}>EVENT VENUE</label>
                </div>
                <div id={'venueTile'} data-aos={'fade-up'}>
                    <div id={'venueName'}>
                        <label className={'vNameTitle'}>VENUE</label>
                        <label id={'vNameCont'}>Sri Lanka Institute of Information Technology, Sri Lanka</label>
                    </div>
                    <div id={'venueDate'}>
                        <label className={'vNameTitle'}>DATE</label><br/>
                        <label id={'vNameDate'}>7th - 9th July,2021</label>
                    </div>

                </div>
                <div id={'imageTileDiv'} data-aos={'fade-up'}>
                    <div className={'crd crd--effect'}>
                        <div className={'crd-img'} style={{backgroundImage: "url("+BG1+")"}}/>
                    </div>
                    <div className={'crd crd--effect'}>
                        <div className={'crd-img'} style={{backgroundImage:"url("+BG2+")"}}/>
                    </div>
                </div>
                <div id={'imageTileDiv2'} data-aos={'fade-up'}>
                    <div className={'crd crd--effect'}>
                        <div className={'crd-img'} style={{backgroundImage: "url("+BG3+")"}}/>
                    </div>
                    <div className={'crd crd--effect'}>
                        <div className={'crd-img'} style={{backgroundImage: "url("+BG4+")"}}/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Home;