import React, { Component } from 'react';
import Usercard from './Usercard';
import './Userlist.css';
import { fetchUsers } from '../actions/apiCalls';
import { connect } from 'react-redux';
import NewUserModal from './NewUserModal';


class Userlist extends Component {
    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    showStatusMessage()  {
        return 
    }

    render() {
        
        const { error, users, loading, message } = this.props;

        if (error) {
            return <div className="messageText">
                        <div>Error during user loading: </div>
                        <div>{error}</div>
                   </div>
        }

        if (loading) {
            console.log("loading");
            return <div className="messageText">Loading users</div>
        }

        console.log(message);
        const userComponent = users.map((user) => {
            return (
                <div className="card" key={user.id}>
                    <Usercard
                        id={user.id}
                        name={user.name}
                        surname={user.surname}
                        job={user.job}
                    />
                </div>
            )
        })

        return (
            <div>
                <div className="cardsArea">
                    {userComponent}
                    <NewUserModal />
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.items,
    loading: state.users.loading,
    message: state.users.message,
    error: state.users.error
});

export default connect(mapStateToProps)(Userlist);