import React from "react";
import '../../styles/WebView.css'
import {toast} from "react-toastify";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

/* configuring options to display toast message */
const options = {
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar:true,
    autoClose:3000,
    closeButton:false
}

class About extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name:'',
            email:'',
            subject:'',
            message:''
        }
    }

    submitContact(event){
        event.preventDefault();
        let info = {
            name:this.state.name,
            subject:this.state.subject,
            email:this.state.email,
            message:this.state.message
        }

        /**
         * Validating the input fields
         * Displaying Error message if any input field is empty
         */
        if(info.name === ''){
            toast.warning("Fill Your Name", options)
        }else if (info.email === ''){
            toast.warning("Fill Your Email Address", options)
        } else if (info.subject === ''){
            toast.warning("Fill The Subject", options)
        }else if (info.message === ''){
            toast.warning("Enter Your Message", options)
        }else{
            toast.success("Your Message Recorded Successfully",options)
        }
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return <div>
            <div id={'divisionColor'}>
                <div className={'box'}>
                    <label className={'custom-underline'}>CONTACT US</label>
                </div>
                <div>
                    <div id={'contactInfoD'}>
                        <label id={'uniTitleDe'}>Sri Lanka Institute of Information Technology, Sri Lanka</label><br/>
                        <div>
                            <label className={'footerCTextDe'}>Email: </label><label className={'footerCTextE'}>info@icaf.lk</label><br/>
                            <label className={'footerCTextDe'}>Contact Number: </label><label className={'footerCTextE'}>+94 11 7544806</label><br/>
                            <label className={'footerCTextDe'}>Address: </label><label className={'footerCTextE'}>SLIIT, New Kandy Road, Malabe, Sri Lanka</label>
                        </div>
                    </div>
                </div>
                <div className={'form-style-about'}>
                    <form>
                        <div>
                            <label htmlFor={'name'}>Your Name</label>
                            <input type={'text'} name={'name'} id={'name'} value={this.state.name}
                                   required onChange={event => this.onChange(event)} />
                        </div>
                        <div>
                            <label htmlFor={'email'}>Your Email</label>
                            <input type={'text'} name={'email'} id={'email'} value={this.state.email}
                                   required onChange={event => this.onChange(event)} />
                        </div>
                        <div>
                            <label htmlFor={'subject'}>Subject</label>
                            <input type={'text'} name={'subject'} id={'subject'} value={this.state.subject}
                                   required onChange={event => this.onChange(event)} />
                        </div>
                        <div>
                            <label htmlFor={'message'}>Message</label>
                            <textarea name={'message'} id={'message'} value={this.state.message}
                                   required onChange={event => this.onChange(event)} rows={6} />
                        </div>
                        <div>
                            <input type={'submit'} value={'Submit'} onClick={event => this.submitContact(event)} />
                        </div>
                    </form>
                </div>
                <div id={'vl'}/>
                <div id={'divisionColor'} style={{height: '50px'}}/>
            </div>
        </div>
    }
}

export default About;