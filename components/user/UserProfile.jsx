import React, {Component} from 'react';
import "../../styles/user/UserProfile.css";
import UserServices from "../../services/UserServices";
import {toast} from "react-toastify";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newName:'',
            NewEmail:'',
            newType:'',
            password:'',
            rePassword:'',

            fullName:'',
            email:'',
            type:''
        }
        // this.CheckPassword = this.CheckPassword.bind(this);
        // this.onChange = this.onChange.bind(this);
    }

    clearInputs(){
        this.setState({
            newName:'',
            NewEmail:'',
            newType:'',
            password:'',
            rePassword:'',
        })
    }

    /**
     * Mounting user details proposal submission of the relevant user to view
     */
    componentDidMount() {
        if(localStorage.getItem('_id') === null ){
            this.props.history.push('/');
        }else{
            UserServices.getUserByID(localStorage.getItem('_id'))
                .then(user => {
                    this.setState({
                        fullName: user.fullName,
                        email: user.email,
                        type: user.type
                    })
                }).catch(err => console.error(err));
        }
    }


    /**
     * This function is to submit Researcher Payment proposal
     */
    changeUserDetails(event){
        event.preventDefault();

        const userID = localStorage.getItem('_id');

        /* configuring options to display toast message */
        const options = {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar:true,
            autoClose:3000,
            closeButton:false
        }

        // The regular expression to validate the email pattern
        const emailRegex= /\S+@\S+\.\S+/;

        if(this.state.password !== null && this.state.NewEmail === '' && this.state.rePassword !== null){
            let Pass = {
                password:this.state.password,
                email:this.state.email
            }
            UserServices.checkPassword(Pass)
                .then(res => {
                    if(res !== null){
                        if(res.error !== 'Invalid Password'){
                            let Account = {
                                email:this.state.NewEmail,
                                password:this.state.rePassword
                            }
                            if(Account.password.match(/^.{8,32}$/)){
                                UserServices.updateUser(userID,Account)
                                    .then(res => {
                                        if(res.status === 201){
                                            toast.success("Password Change Successfully", options);
                                            console.log(res.body);
                                            this.clearInputs();
                                        }
                                        else {
                                            toast.warning('Something went wrong, try again!', options);
                                        }
                                    })
                            }else{
                                toast.warning("Password must be 8 characters long", options);
                            }
                        }else {
                            toast.warning('Invalid Old Password, Enter correct password!', options);
                        }
                    }
                })
        }else if(this.state.NewEmail !== ''){
            if(emailRegex.test(this.state.NewEmail)){
                let account = {
                    email:this.state.NewEmail,
                    password:this.state.rePassword
                }
                UserServices.updateUser(userID,account)
                    .then(res => {
                        if (res.status === 201) {
                            toast.success("Email Change Successfully", options);
                            console.log(res.body);
                            this.clearInputs();
                            setTimeout(function () {
                                window.location.reload();
                            }, 200);
                        }else {
                            toast.warning('Something went wrong, try again!', options);
                        }
                    })
            }else{
                toast.info("Please enter a valid email!", options);
            }
        }else{
            toast.warning('Something went wrong, try again!', options);
        }
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return <div>
            <div className={"profile-section"}>
                <div className={"profile-container"}>

                    <div className={"profile-row"}>
                        <div className={"profile-section-title"}>
                            <h2 className={"profile-custom-underline"}>User Settings</h2>
                        </div>
                    </div>

                    <div className={"profile-row"}>
                        <div className={"profile-item"}>
                            <div className={"profile-item-inner outer-shadow-Profile"}>

                                <h1> User Details </h1>

                                <div>
                                    <label className={"la"}> Full Name :  <label className={"label"}> {this.state.fullName} </label> </label>
                                </div>
                                <div>
                                    <label className={"la"}> Email Address :  <label className={"label"}> {this.state.email} </label> </label>
                                </div>
                                <div>
                                    <label className={"la"}> User type :  <label className={"label"}> {this.state.type} </label> </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"profile-row"}>
                        <div className={"profile-change"}>
                            <div className={"profile-item-inner outer-shadow-Profile"}>
                                <h1> Change Email </h1>
                                <form>
                                    <div className={"input-Field"}>
                                        <input type={'text'} name={'NewEmail'} id={'NewEmail'}  value={this.state.NewEmail} placeholder={'Enter New Email'}
                                               onChange={event => this.onChange(event)}/>
                                    </div>
                                    <div>
                                        <input type={'submit'} value={'Change Email'} onClick={event => this.changeUserDetails(event)} />
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className={"profile-change"}>
                            <div className={"profile-item-inner outer-shadow-Profile"}>
                                <h1> Change Password </h1>
                                <form>
                                    <div className={"input-Field"}>
                                        <input type={'password'} name={'password'} id={'password'} value={this.state.password} placeholder={'Enter Old Password'}
                                               onChange={event => this.onChange(event)} />
                                    </div>
                                    <div className={"input-Field"}>
                                        <input type={'password'} name={'rePassword'} id={'rePassword'} value={this.state.rePassword} placeholder={'Enter New Password'}
                                               onChange={event => this.onChange(event)}/>
                                    </div>
                                    <div>
                                        <input type={'submit'} value={'Change Password'} onClick={event => this.changeUserDetails(event)} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    }
}

export default UserProfile;