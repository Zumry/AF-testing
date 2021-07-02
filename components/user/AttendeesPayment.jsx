import React, {Component} from 'react';
import {toast} from "react-toastify";
import AttendeesServices from "../../services/AttendeesServices";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class AttendeesPayment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:'',
            payment:'',
            cardNo:'',
            exDate:'',
            cvv:''
        }
    }

    componentDidMount() {
        if(localStorage.getItem('_id') === null && localStorage.getItem('type') !== 'Attendee'){
            this.props.history.push('/');
        }
    }

    /**
     * This function is to submit Attendees Payment proposal
     */
    AttendeesPay(event){
        event.preventDefault();

        let Payment = {
            userID:localStorage.getItem('_id'),
            payment:this.state.payment
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
        if(this.state.name === ''){
            toast.warning("File Name.", options);
        }else if(Payment.payment === ''){
            toast.warning("File Amount.", options);
        }else if(this.state.cardNo === '') {
            toast.warning("File Card Number.", options);
        }else if(this.state.exDate === ''){
            toast.warning("File Expiration date.", options);
        }else if(this.state.cvv === ''){
            toast.warning("File cvv.", options);
        }else if(!(this.state.name.match(/^[a-zA-Z ]+$/))) {
            toast.warning("Invalid Name..!!", options);
        }else if(!(Payment.payment.match(/^[0-9]+$/))){
            toast.warning("Invalid amount..!!", options);
        }else if(!(this.state.cardNo.match(/^[0-9].{15}$/))){
            toast.warning("Invalid Card Number..!!", options);
        }else if(!(this.state.exDate.match(/[0-9]+[0-9]+\/+[0-9]+[0-9]/))){
            toast.warning("Invalid card expire Date..!!", options);
        }else if(!(this.state.cvv.match(/^[0-9].{2}$/))){
            toast.warning("Invalid CVV Number..!!", options);
        }else {
            AttendeesServices.makePayment(Payment)
                .then(res => {
                    if(res.status === 201){
                        toast.success("Made payments successful.", options)
                        this.props.history.push("/attendeesTickets");
                    }else{
                        toast.warning("Some thing went wrong!! try again.", options);
                    }
                })
        }
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return<div className={"payment-section"}>
                <div className={"payment-container"}>

                    <div className={"payment-row"}>
                        <div className={"payment-section-title"}>
                            <h2 className={"payment-custom-underline"}>Attendees Payment</h2>
                        </div>
                    </div>

                    <div className={"payment-row"}>
                        <div className={"payment-item"}>
                            <div className={"payment-item-inner outer-shadow-payment"}>
                                <form>
                                    <div>
                                        <label htmlFor={'name'}>Card Owner</label>
                                        <input type={'text'} name={'name'} id={'name'} placeholder={'Name'} value={this.state.name}
                                               onChange={event => this.onChange(event)}/>
                                    </div>
                                    <div>
                                        <label htmlFor={'payment'}>Payment</label>
                                        <input type={'text'} name={'payment'} id={'payment'} placeholder={'Amount'} value={this.state.payment}
                                               onChange={event => this.onChange(event)}/>
                                    </div>
                                    <div>
                                        <label htmlFor={'cardNo'}>Card Number</label>
                                        <input type={'text'} name={'cardNo'} id={'cardNo'} placeholder={'Valid Card Number'} value={this.state.cardNo}
                                               onChange={event => this.onChange(event)}/>
                                    </div>
                                    <div>
                                        <label htmlFor={'exDate'}>Expiration Date</label>
                                        <input type={'text'} name={'exDate'} id={'exDate'} placeholder={'MM/YY'} value={this.state.exDate}
                                               onChange={event => this.onChange(event)}/>
                                    </div>
                                    <div>
                                        <label htmlFor={'cvv'}>CVV Code</label>
                                        <input type={'text'} name={'cvv'} id={'cvv'} placeholder={'CVV'} value={this.state.cvv}
                                               onChange={event => this.onChange(event)}/>
                                    </div>
                                    <div>
                                        <input type={'submit'} value={'Make Payment'} onClick={event => this.AttendeesPay(event)} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

        </div>
    }
}

export default AttendeesPayment;