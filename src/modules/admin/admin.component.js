import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import HomeComponent from './home';
import AuthComponent from '../auth';

const AdminComponent = props => {
  return (
    <div>
      <Route path="/admin/home" component={HomeComponent} />
      <Route path="/admin/auth" component={AuthComponent}></Route>
      <Redirect exact from="/admin" to="/admin/auth/login" />
    </div>
  );
};

export default AdminComponent;
