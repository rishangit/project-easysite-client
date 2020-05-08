import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import styles from './admin.module.scss';
import HomeComponent from './home';

import Header from '../application/header';
import Navigation from '../application/navigation'


const AdminComponent = props => {
  return (
    <div className={styles.adminWrp}>
      <Header />
      <Navigation/>
      <div className={styles.adminCon}>
        <Switch>
          <Route path="/admin/home" component={HomeComponent} />

          <Redirect exact from="/admin" to="/admin/auth/login" />
        </Switch>
      </div>
    </div>
  );
};

export default AdminComponent;
