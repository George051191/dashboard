import React from 'react';
import { Col, Row } from 'reactstrap';
import { WidgetsData, WidgetsData2, WidgetsData3, WidgetsData4 } from '../../../Data/DefaultDashboard';
import Widgets1 from '../../Common/CommonWidgets/Widgets1';


const WidgetsWrapper = () => {
  return (
    <>
      <Col className='box-col-6 col-sm-12 col-md-6 col-xl-6 col-xxl-4'>

        <div style={{ gap: 10 }} className='m-b-10 d-flex flex-column gap-20 flex-sm-row justify-content-start gap-20 flex-md-row flex-lg-row flex-xl-row flex-xxl-column'>
          <Col className=' col-md-12 col-xl-12'>
            <Widgets1 data={WidgetsData} />
          </Col>

          <Col className=' col-md-12 col-xl-12'>
            <Widgets1 data={WidgetsData2} />
          </Col>
        </div>
        <div style={{ gap: 10 }} className='d-flex flex-column gap-20 flex-sm-row justify-content-start gap-20 flex-md-row flex-lg-row flex-xl-row flex-xxl-column'>
          <Col className=' col-md-12 col-xl-12'>
            <Widgets1 data={WidgetsData3} />
          </Col>

          <Col className=' col-md-12 col-xl-12'>
            <Widgets1 data={WidgetsData4} />
          </Col>
        </div>

      </Col>


    </>
  );
};

export default WidgetsWrapper;
