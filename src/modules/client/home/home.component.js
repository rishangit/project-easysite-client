import React from 'react';
import { FormContainer, ButtonElement } from '../../../common/forms';

import HomeBase from './home.base';
const HomeComponent = props => {
  const homeBase = HomeBase({ ...props });
  const { elementSchema } = homeBase;

  return <div>This is the Preview mode</div>;
};

export default HomeComponent;
