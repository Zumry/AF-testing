import React, {Component} from 'react';
import '../../styles/user/AttendeesTickets.css';
import AttendeesServices from "../../services/AttendeesServices";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class AttendeesTickets extends Component {
    constructor(props) {
        super(props);

        this.state = {
            payment:'',
            payDate:'',
            tickets:[]
        }
    }

    /**
     * Mounting user details proposal submission of the relevant user to view
     */
    componentDidMount() {
        if(localStorage.getItem('_id') === null && localStorage.getItem('type') !== 'Attendee'){
            this.props.history.push('/');
        }else{
            AttendeesServices.getTicketsByUserId(localStorage.getItem('_id'))
                .then(res => {
                    this.setState({tickets:res})
                }).catch(err => console.error(err));
        }

    }

    render() {
        return (
            <div className={"Tickets-section"}>
                <div className={"Tickets-container"}>

                    <div className={"Tickets-row"}>
                        <div className={"Tickets-section-title"}>
                            <h2 className={"Tickets-custom-underline"}>Conference Tickets</h2>
                        </div>
                    </div>

                    <div className={"Tickets-row"}>
                    {this.state.tickets.map(ticket =>(
                        <div className={"Tickets-item"}>
                            <div className={"Tickets-item-inner outer-shadow-Tickets"}>
                                <h3>Amount : {ticket.payment} </h3>
                                <h3>Paid Date : {ticket.payDate} </h3>
                            </div>
                        </div>
                    ))}
                    </div>

                </div>
            </div>
        );
    }
}

export default AttendeesTickets;