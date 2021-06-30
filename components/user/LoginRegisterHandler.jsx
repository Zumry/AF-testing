import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../../styles/user/LoginRegister.css';
import '../../styles/toast.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import UserServices from "../../services/UserServices";
toast.configure();

//Images
import Img011 from 'url:../../images/Login/bg1.svg';
import Img022 from 'url:../../images/Login/bg2.svg';
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
    isPasswordShown: false,
    isEyeImage: true,
    fullName:'',
    email:'',
    type:'',
    password:''
}

class LoginRegisterHandler extends Component {
    constructor(props) {
        super(props);

        this.state =  {
            isActive:true,
            isOnClicked: true,
            isPasswordShown: false,
            isEyeImage: true,
            initialState,
            // The regular expression to validate the email pattern
            emailRegex: /\S+@\S+\.\S+/,
        }
        localStorage.setItem('loginValue', 'value');
    }


    /**
     * This function is to submit Login account proposal
     */
    loginAccount(event){
        event.preventDefault();

        let User = {
            email:this.state.email,
            password:this.state.password
        }

        /* configuring options to display toast message */
        const options = {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar:true,
            autoClose:3000,
            closeButton:false
        }

        /**
         * Validating the login account submission input fields
         * Displaying Error message if any input field is empty
         */
        if(User.email === ''){
            toast.warning("File Email.", options);
        }else if(User.password === ''){
            toast.warning("File Password", options);
        }else if(this.state.emailRegex.test(User.email)){
            // console.log(JSON.stringify(User));
            UserServices.loginAccount(User)
                .then(res =>{
                    if(res !== null){
                        if(res.error !== 'User can not access.'){
                            toast.success("Login Successful", options);
                            localStorage.setItem('userToken',res.token);
                            localStorage.setItem('_id',res.userID);
                            localStorage.setItem('type',res.type);

                            console.log('type 2 : ',res.type );

                            if(res.type === 'Administrator'){
                                this.props.history.push("/adminDashboard")
                            }else{
                                this.props.history.push("/")
                            }
                        }else{
                            toast.error("Username or Password Incorrect.",options);
                        }
                    }else{
                        toast.error("Username or Password Incorrect.",options);
                    }
                })
        }else {
            toast.info("Please enter a valid email!", options);
        }
    }


    /**
     * This function is to submit create account proposal
     */
    registerAccount(event){
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
        }else if(this.state.emailRegex.test(Account.email)){
            UserServices.createAccount(Account)
                .then(res =>{
                    if(res.status === 201){
                        toast.success("Account created Successfully", options);
                        this.setState(initialState);
                    }else{
                        toast.error("Something went wrong!!,Try again.",options);
                    }
                })
        }else {
            toast.info("Please enter a valid email!", options);
        }
    }

    // redirecting to Sign-in page
    changeSignInForm(){
        // set state value to initialize state value
        this.setState(initialState);
        this.setState({isActive:false});
        history.push('/login');
    }

    // redirecting to  Sign-up page
    changeSignUpForm(){
        // set state value to initialize state value
        this.setState(initialState);
        this.setState({isActive:true});
        history.push('/login');
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

            <div className={this.state.isActive===true ? "login-container" : "login-container sign-up-mode"} id={"container"}>
                <div className={"forms-container"}>
                    <div className={"signin-signup"}>

                {/* ----------------------------- Login Form ----------------------------- */}
                        <form className={"sign-in-form"}>
                            <h2 className={"title"}>Sign In</h2>
                            <div className={"input-field"}>
                                <img src={ImgEmail} className={"fas"}/>
                                <input type={'text'} name={'email'} id={'email'}  value={this.state.email}
                                       placeholder={"Email"} onChange={event => this.onChange(event)}/>
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
                            <input type={"submit"} value={"Login"} className={"btn solid"} onClick={event => this.loginAccount(event)} />
                            <p className={"p-link"}>Don't have an account? <Link id={'linkC'} to={''} onClick={this.changeSignInForm.bind(this)}> Create Account </Link> </p>
                        </form>

                {/* ----------------------------- Registration Form ----------------------------- */}
                        <form className={"sign-up-form"}>
                            <h2 className={"title"}>Sign up</h2>
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
                                    <option value={"Researcher"}>Researcher</option>
                                    <option value={"WorkshopConductor"}>Workshop Conductor</option>
                                    <option value={"Attendee"}>Attendee</option>
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
                            <p className={"p-link"}>Do you have an account? <Link id={'linkC'} to={''} onClick={this.changeSignUpForm.bind(this)}> Login Account </Link> </p>
                        </form>

                {/* ------------ Registration Form  end ------------ */}

                    </div>
                </div>

                <div className={"panels-container"}>
                    <div className={"panel left-panel"}>
                        <div className={"content"}>
                            <h3>ICAF 2021</h3>
                            <p>
                                International Conference on Application Frameworks.
                            </p>
                            {/*<button className={"btn transparent"} id={"sign-up-btn"} onClick={this.changeSignInForm.bind(this)} >Sign up</button>*/}
                        </div>
                        <img src={Img011} className={"image"} />
                    </div>

                    <div className={"panel right-panel"}>
                        <div className={"content"}>
                            <h3>ICAF 2021</h3>
                            <p>
                                International Conference on Application Frameworks.
                            </p>
                            {/*<button className={"btn transparent"} id={"sign-in-btn"} onClick={this.changeSignUpForm.bind(this)} >Sign In</button>*/}
                        </div>
                        <img src={Img022} className={"image"} />
                    </div>
                </div>

            </div>

        </div>
    }
}

export default LoginRegisterHandler;