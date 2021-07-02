import React from "react";
import '../styles/HeaderFooter.css'

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class Footer extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            type:null
        }
    }

    componentDidMount() {
        this.setState({type:localStorage.getItem('type')})
    }

    componentWillUnmount() {
        localStorage.removeItem('footerValue')
    }

    render() {
        return <div>
            {
                localStorage.getItem('footerValue') !== 'value' ?
                    (
                        this.state.type === 'Administrator'?
                             (<></>)
                        :(<div id={'footer'}>
                            <div id={'contInfoTitle'}>
                                <label id={'contInfoLabel'}>Contact Information</label>
                                <hr/>
                                <div id={'contactInfo'}>
                                    <label id={'uniTitle'}>Sri Lanka Institute of Information Technology, Sri Lanka</label><br/>
                                    <div>
                                        <label className={'footerCText'}>Email: </label><label className={'footerCTextD'}>info@icaf.lk, </label>
                                        <label className={'footerCText'}>Contact Number: </label><label className={'footerCTextD'}>+94 11 7544806, </label>
                                        <label className={'footerCText'}>Address: </label><label className={'footerCTextD'}>SLIIT, New Kandy Road, Malabe, Sri Lanka</label>
                                    </div>
                                </div>
                                <label id={'rightsLabel'}>&copy; 2020 SLIIT, developed by 3rd year 1st Semester Students. All Rights Reserved</label>
                            </div>
                        </div>)
                    )
                :(<></>,localStorage.removeItem('footerValue'))
            }
        </div>
    }
}

export default Footer