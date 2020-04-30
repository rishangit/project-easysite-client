import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loginAttempt } from '../auth.action';
import LoginBase from './login.base';
import { Row, Col, Container } from 'reactstrap';
import classNames from 'classnames';
import { LoginStatus } from '../auth.constants';
import { appActionSetBreadcrumb } from '../../application/app.action';
import {
  FormContainer,
  TextBoxElement,
  ButtonElement,
} from '../../../common/forms';
import styles from './login.module.scss';
import * as loginImg from '../../../assests/login.jpg';

const LoginComponent = props => {
  console.log('LoginComponent');
  let { authReducer, appActionSetBreadcrumb } = props;
  const loginBase = LoginBase({ ...props });
  const { formSchema, elementSchema } = loginBase;

  useEffect(() => {
    if (authReducer.loginStatus === LoginStatus.LOGIN_SUCCESS) {
      props.history.push('/admin/home');
    }
    appActionSetBreadcrumb([]);
  }, [authReducer.loginStatus]);

  return (
    <Container>
      <Row>
        <Col md="4" className={classNames(styles.loginWrp, 'flx-cc-h')}>
          <div className={classNames(styles.loginContainer)}>
            <h2 className="title">Loging</h2>
            <FormContainer {...formSchema}>
              <TextBoxElement {...elementSchema.mobile} />
              <TextBoxElement {...elementSchema.password} />
              <ButtonElement {...elementSchema.btnSubmit} />
            </FormContainer>
          </div>
        </Col>
        <Col md="8">
          <Container>
            <img src={loginImg} alt="main" className={styles.imageWrp} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispathToProps = {
  loginAttempt,
  appActionSetBreadcrumb,
};

export default connect(mapStateToProps, mapDispathToProps)(LoginComponent);
