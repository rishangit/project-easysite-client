import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import styles from './admin.module.scss';
import HomeComponent from './home';
import {
  WebPageComponent,
  ListWebpagesComponent,
  EditWebpagesComponent,
} from './webpages';

import Header from '../application/header';
import Navigation from '../application/navigation';

const AdminComponent = props => {
  return (
    <div className={styles.adminWrp}>
      <Header />
      <Navigation />
      <div className={styles.adminCon}>
        <Switch>
          <Route exact path="/admin/home" component={HomeComponent} />
          <Route
            exact
            path="/admin/webpage/content/:id"
            component={EditWebpagesComponent}
          />
          <Route
            exact
            path="/admin/webpage/edit/:id"
            component={WebPageComponent}
          />
          <Route
            exact
            paht="/admin/webpage/list"
            component={ListWebpagesComponent}
          />

          <Redirect exact from="/admin" to="/admin/auth/login" />
        </Switch>
      </div>
    </div>
  );
};

export default AdminComponent;
