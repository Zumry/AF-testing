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
    logout(event){
        localStorage.clear();
        this.props.history.push('/');

    }

    componentDidMount(){
        if(localStorage.getItem('_id') === null && localStorage.getItem('type') !== 'Administrator'){
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
                <div className="sidebar">
                    <div className="navDiv">
                        <a className="aDLink" href="#"><span id="dashName">ICAF 2021</span></a>
                        <ul id="dashUl">
                            <li className="dashLi active"><a className="aDLink" href="#">Dashboard</a></li>
                            <li className="dashLi"><a className="aDLink" href="/adminCreateUser">Create User</a></li>
                            <li className="dashLi"><a className="aDLink" href="/approve-conference/:id">View Requests</a></li>
                            <li className="dashLi"><a className="aDLink" href="/AdminView/">View Users</a></li>
                            <li className="dashLi"><a className="aDLink" href="/display-conference/:id">View Conference Contents</a></li>
                        </ul>
                    </div>
                    <button id={'logOutAdmin'} onClick={event => this.logout(event)}>logout</button>
                </div>

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
