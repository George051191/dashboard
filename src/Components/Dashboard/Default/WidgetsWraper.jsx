import React from 'react';
import { Col, Row } from 'reactstrap';
import { WidgetsData, WidgetsData2, WidgetsData3, WidgetsData4 } from '../../../Data/DefaultDashboard';
import Widgets1 from '../../Common/CommonWidgets/Widgets1';


const WidgetsWrapper = () => {
  return (
    <>
      <Col xxl='4' xl='5' lg='5' sm='6' className='box-col-6'>
        <Row>
          <Col xl='12'>
            <Widgets1 data={WidgetsData} />
          </Col>
          <Col xl='12'>
            <Widgets1 data={WidgetsData2} />
          </Col>
        </Row>
        <Row>
          <Col xl='12'>
            <Widgets1 data={WidgetsData3} />
          </Col>
          <Col xl='12'>
            <Widgets1 data={WidgetsData4} />
          </Col>
        </Row>
      </Col>


    </>
  );
};

export default WidgetsWrapper;
