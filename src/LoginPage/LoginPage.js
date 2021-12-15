import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {RiLockPasswordFill,RiUserFill} from 'react-icons/ri'
import '../App.css'

import LoadingGif from '../images/loading-arrow.gif'
import sidebar from '../images/sidebar-login.jpeg'
import { userActions } from '../actions';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <>
            
            <div className="img_div">
            <img src={sidebar} width="300px" height="400px" alt="sidebar-img"/>
            </div>
            <section>
            <div >            
                <div className="login_div">
                    <br/>
                <h3>Login</h3>
                {/* This is login form */}
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username*<RiUserFill/></label>
                        <input type="text"  name="username" value={username} onChange={this.handleChange} placeholder ="Enter registered email"/>
                        {submitted && !username &&
                            <div >Username is required</div>
                        }
                    </div>
                    <br/>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password* <RiLockPasswordFill/></label>
                        <input type="password"  name="password" value={password} onChange={this.handleChange} placeholder ="password" />
                        {submitted && !password &&
                            <div>Password is required</div>
                        }
                    </div>
                    <div className="login_button_div">
                        <button className="btn-primary">Login</button>
                        {loggingIn &&
                            <img src={LoadingGif} alt="From Login Page" />
                        }                
                    </div>
                    <hr/> 
                    <h6>Don't have an account?</h6>
                    <Link to="/register" style={{color:'Red',fontSize:'20px'}}>Sign-Up</Link>
                </form>
                <p className="login_terms" style={{color:'white'}}>*By logging in, I understand & agree to wfm terms and conditions</p>
            </div>
            </div>
            </section>
            
            </>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };