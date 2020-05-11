import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWebPageAttempt } from '../webpages.action';
import { Row, Col, Container } from 'reactstrap';

const EditWebpagesComponent = props => {
  let {
    webPagesReducer: { current },
    getWebPageAttempt,
    match: { params },
  } = props;

  useEffect(() => {
    if (params && params.id) getWebPageAttempt({ _id: params.id });
  }, []);

  return (
    <Container>
      <Row>
        <Col md="12">
          <h3 className="title">Edit webpage</h3>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  getWebPageAttempt,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditWebpagesComponent);
