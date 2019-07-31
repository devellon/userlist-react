import React, { Component } from 'react';
import Usercard from './Usercard';
import './Userlist.css';
import { fetchUsers } from '../actions/apiCalls';
import { connect } from 'react-redux';
import NewUserModal from './NewUserModal.js';

class Userlist extends Component {
    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    render() {
        const { error, users, loading } = this.props;

        if (error) {
            return <div>Error loading users</div>
        }

        if (loading) {
            console.log("loading");
            return <div className="loadingText">Loading users</div>
        }

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
            <div className="cardsArea">
                {userComponent}
                <NewUserModal />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.items,
    loading: state.users.loading
});

export default connect(mapStateToProps)(Userlist);