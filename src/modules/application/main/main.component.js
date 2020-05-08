import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { appActionShowNavi } from '../app.action';
import { connect } from 'react-redux';
import classNames from 'classnames';

import MainBase from './main.base';
import Header from '../header';
import Navigation from '../navigation';
import SubHeader from '../subHeader';

//admin
import AdminComponent from '../../admin';
import AuthComponent from '../../auth';
//client
import ClientHomeComponent from '../../client/home';

const MainComponent = props => {
  let {
    appActionShowNavi,
    appReducer: { showNavi },
  } = props;
  const mainBase = MainBase(props);

  const hadleBlink = () => {
    appActionShowNavi(false);
  };

  return (
    <div className={'App theme'}>
      <BrowserRouter>
        <div className="bodyWrp">
          <Switch>
            <Route path="/admin/auth" component={AuthComponent}></Route>
            <Route path="/admin" component={AdminComponent}></Route>
            <Route exact path="/" component={ClientHomeComponent}></Route>
          </Switch>
        </div>
        <div
          className={classNames(showNavi && 'show', 'blink')}
          onClick={hadleBlink}
        ></div>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispacthToProps = {
  appActionShowNavi,
};

export default connect(mapStateToProps, mapDispacthToProps)(MainComponent);
