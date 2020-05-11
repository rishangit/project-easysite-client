import React from 'react';
import styles from './navigation.module.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { appActionShowNavi } from '../app.action';
import { logOut } from '../../auth/auth.action';
import { useHistory } from 'react-router-dom';
import { Icon, listIconSize } from '../../../common/component/icon';


import {NaviWebPagesComponent, AddWebPagesComponent} from '../../admin/webpages'

const Navigation = props => {
  let {
    appActionShowNavi,
    appReducer: { showNavi },
    authReducer: { loggedUser },
    logOut,
  } = props;

  let history = useHistory();
  const naviClicked = props => {
    if (showNavi) appActionShowNavi(false);
  };

  const handleLogOut = event => {
    history.push('/admin/auth');
    logOut();
    naviClicked();
  };

  return (
    <>
      <div
        className={classNames(
          styles.naviWrp,
          showNavi && styles.show,
          loggedUser._id && styles.logged,
          'theme-navi',
        )}
      >
        <nav>
          <div className={styles.naviHeader}>
            {loggedUser._id && (
              <div className={styles.userName}>{loggedUser.firstName}</div>
            )}
          </div>
          <ul>
            <li>
            <NaviWebPagesComponent/>
             
            </li>
          </ul>
        </nav>
        <div className={styles.blink}></div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispacthToProps = {
  appActionShowNavi,
  logOut,
};

export default connect(mapStateToProps, mapDispacthToProps)(Navigation);
