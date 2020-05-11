import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { listWebPageAttempt, removeWebPageAttempt } from '../webpages.action';
import { Row, Col, Container } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Delete, Edit } from '@material-ui/icons';

const ListWebpagesComponent = props => {
  let {
    webPagesReducer: { webPageList },
    listWebPageAttempt,
    removeWebPageAttempt,
  } = props;

  useEffect(() => {
    listWebPageAttempt({});
  }, []);

  const handleRemoveClick = (event, _id) => {
    removeWebPageAttempt({ _id });
  };

  return (
    <Container>
      <Row>
        <Col md="12">
          <h3 className="title">Webpage List</h3>
          <ListGroup>
            {webPageList.length > 0 &&
              webPageList.map(webPage => (
                <ListGroupItem key={webPage._id}>
                  <div className={'flx-rc-v'}>
                    <div className={'item'}>{webPage.name}</div>
                    <div className={'ft-r icon-wrp'}>
                      <Link to={`/admin/webpage/content/${webPage._id}`}>
                        <Edit />
                      </Link>
                      <Delete />
                    </div>
                  </div>
                </ListGroupItem>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  listWebPageAttempt,
  removeWebPageAttempt,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListWebpagesComponent);
