import React from 'react';

export class UserSignupPage extends React.Component {

    // creating a state
    // also needed also callback function to handle the change in event
    state = {
        displayName: '',
        username: '',
        password: '',
        passwordRepeat: '',
        pendingApiCall: false,
    };

    // creating an onChange function for display name, when the state is changed
    // it will get called with onChange event, to hanle the changeed event
    // on browser, the typing wont work, as value is set empty, hence need to change it with event e
    onChangeDisplayName = (event) => {
        const value = event.target.value;
        this.setState({ displayName: value })
    }

    // even function for event handling for user name
    onChangeUserName = (e) => {
        const value = e.target.value;
        this.setState({ username: value })
    }

    // even function for event handling for password
    onChangePassword = (e) => {
        const value = e.target.value;
        this.setState({ password: value })
    }

    // even function for event handling for password repeat
    onChangePasswordRepeat = (e) => {
        const value = e.target.value;
        this.setState({ passwordRepeat: value })
    }

    // on click event function for API call
    onClickSignup = () => {
        const user = {
            username: this.state.username,
            displayName: this.state.displayName,
            password: this.state.password,
        }
        this.setState({pendingApiCall: true})
        this.props.actions.postSignup(user)
    }

    render () {
        return (
            <div className='container '>
                <h1 className='text-center'>Sign Up</h1>
                <div className='col-6 mb-3 row'>
                    <label className='col-sm-4 pt-1 fw-semibold'>Display Name</label>
                    <div className='col-md-8'>
                    <input placeholder="Your display name" value={this.state.displayName} onChange={this.onChangeDisplayName} className='form-control' />
                    </div>
                </div>
                <div className='col-6 mb-3 row'>
                    <label className='col-sm-4 pt-1 fw-semibold'>Username</label>
                    <div className='col-md-8'>
                        <input placeholder="Your username" value={this.state.username} onChange={this.onChangeUserName} className='form-control' />
                    </div>
                </div>
                <div className='col-6 mb-3 row'>
                    <label className='col-sm-4 pt-1 fw-semibold'>Password</label>
                    <div className='col-md-8'>
                        <input placeholder="Your password" type="password" value={this.state.password} onChange={this.onChangePassword} className='form-control' />
                    </div>
                    </div>
                <div className='col-6 mb-3 row'>
                    <label className='col-sm-4 pt-1 fw-semibold'>Password Repeat</label>
                    <div className='col-md-8'>
                        <input placeholder="Repeat your password" type="password" value={this.state.passwordRepeat} onChange={this.onChangePasswordRepeat} className='form-control' />
                    </div>
                </div>
                <div className='text-center mt-3'>
                    <button type="" className='btn btn-primary' onClick={this.onClickSignup} disabled={this.state.pendingApiCall} >Sign Up</button>
                </div>
            </div>
        )
    }
}

// React allows to set default properties of components
// postSignup will be an ashynchronous function with API call, and will return a promise
UserSignupPage.defaultProps = {
    actions: {
        postSignup: () => new Promise((resolve, reject) => {resolve({})})
    }
}

export default UserSignupPage;