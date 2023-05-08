import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

import BasicFormControlClass from './BasicFormControl';


const BaseInput = () => {
  return (
    <Fragment>


      <Row>
        <Col sm='12'>
          <BasicFormControlClass />

        </Col>
      </Row>

    </Fragment>
  );
};

export default BaseInput;
