import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import BasicFormControlClass from './BasicFormControl';
import HtmlControlClass from './HtmlControl';
import EdgesInputStyleClass from './EdgesInputStyle';
import FlatInputStyleClass from './FlatInputStyle';
import RaiseInputStyleClass from './RaiseInputStyle';
import SolidInputStyleClass from './SolidInputStyle';
import InputSizingClass from './InputSizing';
import CustomControlsClass from './CustomControls';

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
