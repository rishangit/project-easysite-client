import React, { useState, useEffect } from 'react';
import { model, validation } from './webPage.constants';

const WebPageBase = props => {
  const {
    saveWebPageAttempt,
    getWebPageAttempt,
    match: { params },
    webPagesReducer: { current },
  } = props;
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [initModel, setInitModel] = useState(model);
  useEffect(() => {
    if (params && params.id) getWebPageAttempt({ _id: params.id });
  }, []);

  useEffect(() => {
    if (current && current.name) {
      const { name, url } = current;
      setInitModel({ name, url });
    }
  }, [current]);

  const onSubmit = values => {
    saveWebPageAttempt(values);
  };

  const onChange = values => {
    setBtnDisabled(false);
  };

  const formSchema = {
    initModel,
    validation,
    onSubmit,
    onChange,
  };

  const elementSchema = {
    name: {
      name: 'name',
      label: 'Page Name',
    },
    url: {
      name: 'url',
      label: 'Web Page Url',
    },
    btnSubmit: {
      label: 'Save',
      disabled: btnDisabled,
    },
  };

  return { formSchema, elementSchema };
};

export default WebPageBase;
