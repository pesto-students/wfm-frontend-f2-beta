import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css'


import { userActions } from '../actions';

import BookedProperty from '../pages/BookedProperty';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user} = this.props;
        return (
            <div className="main_logout_div">
                <h1>Hi {user.firstName}!</h1>
                <h6>Welcome </h6>
                <BookedProperty/>
                <p>
                    <Link to="/login" className="btn-primary">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };