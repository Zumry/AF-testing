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
            type:localStorage.getItem('type')
        }
    }

    render() {
        return <div>
            {
                localStorage.getItem('loginValue') === 'value' ?
                    (<></>)
                :this.state.type === 'Administration'?
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
            }
        </div>
    }
}

export default Footer