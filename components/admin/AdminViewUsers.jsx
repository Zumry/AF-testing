import React, { Component } from 'react';
import UserServices from "../../services/UserServices";
import '/styles/admin/Conference.css';

/*
*  IT 19167442
*  Author Nusky M.A.M
*
* */
class AdminViewUsers extends Component {
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            Users:[]

        }

    }

    componentDidMount(){
        if(localStorage.getItem('_id') === null ){
            this.props.history.push('/');
        }else {
            UserServices.getAllUser().then((res) => {

                this.setState({Users: res});
            });
        }
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Users </h2>

                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th> Username </th>
                            <th> Email </th>
                            <th> Type</th>

                        </tr>

                        </thead>

                        <tbody>
                        {
                            this.state.Users.map(
                                user =>
                                    <tr key={user._id}>
                                        <td> {user.fullName}</td>
                                        <td> {user.email}</td>
                                        <td> {user.type}</td>


                                    </tr>


                            )

                        }

                        </tbody>

                    </table >

                </div>
            </div>
        )
    }
}

export default AdminViewUsers;
