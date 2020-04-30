import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
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
    <div className="App">
      <BrowserRouter>
        <div className="bodyWrp">
          <div className="bodyCon">
            <Route path="/admin" component={AdminComponent}></Route>
            <Route exact path="/" component={ClientHomeComponent}></Route>
          </div>
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
