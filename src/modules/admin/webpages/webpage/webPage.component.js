import React from "react";
import { connect } from "react-redux";
import WebPageBase from "./webPage.base";
import { Row, Col } from "reactstrap";
import { saveWebPageAttempt,getWebPageAttempt } from "../webpages.action";
import {
  FormContainer,
  TextBoxElement,
  ButtonElement
} from "../../../../common/forms";

const WebPageComponent = props => {
  const webPageBase = WebPageBase({ ...props });
  const { formSchema, elementSchema } = webPageBase;

  return (
    <Row>
      <Col md="12">
        <div>
          <h2 className="title">Page Informations</h2>
          <FormContainer {...formSchema}>
            <TextBoxElement {...elementSchema.name} />
            <TextBoxElement {...elementSchema.url} />
            <ButtonElement {...elementSchema.btnSubmit} />
          </FormContainer>
        </div>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToPorps = {
  saveWebPageAttempt,
  getWebPageAttempt
};

export default connect(mapStateToProps, mapDispatchToPorps)(WebPageComponent);
