import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'redux/modules/base';
import * as authActions from 'redux/modules/auth';

import './Login.css';

class Login extends React.Component {

    componentWillMount() {
        this.props.BaseActions.setHeaderVisibility(false);
    }

    componentWillUnmount() {
        const { AuthActions } = this.props;
        AuthActions.initializeForm('login')

        this.props.BaseActions.setHeaderVisibility(true);
    }

    handleChange = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form: 'login'
        });
    }

    render() {
        const { email, password } = this.props.form.toJS(); // form 에서 email 과 password 값을 읽어옴
        const { handleChange } = this;

        return (
            <div className="login">
                <h4 className="title">로그인</h4>
                <div className="form">
                    <input type="text" id="userId" name="userId" placeholder="아이디" onChange={handleChange}/>
                    <input type="password" id="password" name="password" placeholder="패스워드" onChange={handleChange}/>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['login', 'form'])
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(Login);