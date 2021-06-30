import React, {Component} from 'react';
import '../../styles/user/LoginRegister.css';
import '../../styles/toast.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import AdminUserServices from "../../services/AdminUserService";
toast.configure();

//Images
import Img02 from 'url:../../images/Login/register.svg';
import ImgEmail from 'url:../../images/Login/email.png';
import ImgLock from 'url:../../images/Login/lock.png';
import ImgUser from 'url:../../images/Login/user.png';
import ImgUsers from 'url:../../images/Login/users.png';
import ImgEye from 'url:../../images/Login/eye.png';
import ImgEyeHide from 'url:../../images/Login/eye-hide.png';


/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

const initialState = {
    username:'',
    password:'',
    email:'',
    type:''
}

class AdminCreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPasswordShown: false,
            isEyeImage: true,
            initialState
        };
    }

    /**
     * This function is to submit admin create account proposal
     */
    registerAccount(event) {
        event.preventDefault();

        let Account = {
            fullName: this.state.fullName,
            email: this.state.email,
            type: this.state.type,
            password: this.state.password
        }

        /* configuring options to display toast message */
        const options = {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar:true,
            autoClose:3000,
            closeButton:false
        }

        // The regular expression to validate the email pattern
        const emailRegex= /\S+@\S+\.\S+/;

        /**
         * Validating the create account submission input fields
         * Displaying Error message if any input field is empty
         */
        if(Account.fullName === ''){
            toast.warning("File Full Name.", options);
        }else if(Account.email === ''){
            toast.warning("File Email.", options);
        }else if(Account.type === ''){
            toast.warning("Select Type", options);
        }else if(Account.password === ''){
            toast.warning("File Password", options);
        }else if(emailRegex.test(Account.email)){
            AdminUserServices.registerAccount(Account)
                .then(res =>{
                    if(res.status === 201){
                        toast.success("Account created Successfully", options);
                        this.setState(initialState);
                    }else{
                        toast.error("Something went wrong!!,Try again.",options);
                    }
                })
        }else{
            toast.info("Please enter a valid email!", options);
        }
    }


    // Admin Users view panel
    changeViewUsersForm(){
        this.props.history.push('/adminView');
    }

    PasswordVisibility(){
        this.setState({isPasswordShown:true});
        this.setState({isEyeImage:false});
        this.setState({isOnClicked:false})
    };

    PasswordNotVisibility(){
        this.setState({isPasswordShown:false});
        this.setState({isEyeImage:true});
        this.setState({isOnClicked:true})
    };

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return <div className={"Login-Section"}>

            <div className={"login-container sign-up-mode"} id={"login-container"}>
                <div className={"forms-container"}>
                    <div className={"signin-signup"}>

                        {/* ----------------------------- Registration Form ----------------------------- */}
                        <form className={"sign-up-form"}>
                            <h2 className={"title"}> Admin Register User </h2>
                            <div className={"input-field"}>
                                <img src={ImgUser} className={"fas"}/>
                                <input type={'text'} name={'fullName'} id={'fullName'} value={this.state.fullName}
                                       placeholder={"Full Name"} onChange={event => this.onChange(event)}/>
                            </div>
                            <div className={"input-field"}>
                                <img src={ImgEmail} className={"fas"}/>
                                <input type={'text'} name={'email'} id={'email'}  value={this.state.email}
                                       placeholder={"Email"} onChange={event => this.onChange(event)}/>
                            </div>
                            <div className={"input-field"}>
                                <img src={ImgUsers} className={"fas"}/>
                                <select id={"type"} name={"type"} value={this.state.type} onChange={event => this.onChange(event)}>
                                    <option id={"SEL-opt"}>Selection</option>
                                    <option value={"Editor"}>Editor</option>
                                    <option value={"Reviewer"}>Reviewer</option>
                                </select>
                            </div>
                            <div className={"input-field"}>
                                <img src={ImgLock} className={"fas"}/>
                                <input
                                    type={this.state.isPasswordShown===false ? "password" : "text"}
                                    name={'password'} id={'password'}
                                    value={this.state.password} placeholder={"Password"}
                                    onChange={event => this.onChange(event)}
                                />
                                <img
                                    src={this.state.isEyeImage===true ? ImgEye : ImgEyeHide}
                                    className={"eye"}
                                    onClick={this.state.isOnClicked===true ? this.PasswordVisibility.bind(this) : this.PasswordNotVisibility.bind(this)}
                                />
                            </div>
                            <input type={"submit"} className={"btn"} value={"Register"} onClick={event => this.registerAccount(event)}/>
                        </form>

                        {/* ------------ Registration Form  end ------------ */}

                    </div>
                </div>

                <div className={"panels-container"}>
                    <div className={"panel left-panel"}></div>

                    <div className={"panel right-panel"}>
                        <div className={"content"}>
                            <h3>ICAF 2021</h3>
                            <p>
                                International Conference on Application Frameworks.
                            </p>
                            <button className={"btn transparent"} id={"sign-in-btn"} onClick={this.changeViewUsersForm.bind(this)} > View Users </button>
                        </div>
                        <img src={Img02} className={"image"} />
                    </div>
                </div>

            </div>

        </div>
    }
}

export default AdminCreateUser;