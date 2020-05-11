import React from 'react';
import { Link } from 'react-router-dom';
import { AddCircle } from '@material-ui/icons';

const NaviWebPagesComponent = props => {
  // const handleAddNew = e => {
  //   console.log('add page');
  // };

  return (
    <div>
      <div className={'flx-rc-v'}>
      <Link to="/admin/webpage/list" className={'ft-r'}><div>Web Pages</div></Link>
        <Link to="/admin/webpage/edit/new" className={'ft-r'}>
          <AddCircle />
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default NaviWebPagesComponent;
