import React, { Fragment, useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';

import H3 from '../Headings/H3Element';
import CustomizerContext from '../../_helper/Customizer';


const Breadcrumbs = (props) => {
  const { layoutURL } = useContext(CustomizerContext);
  return (
    <Fragment>
      <Container fluid={true}>
        <div className='page-title mr-0'>
          <Row>
            <Col xs='6'>
              <H3>{props.mainTitle}</H3>
            </Col>

          </Row>
        </div>
      </Container>
      {/*    <Container style={{ marginTop: '105px' }} className=' d-block d-md-none d-lg-none d-xl-none d-xxl-none' fluid={true}>
        <div className='page-title mr-0'>
          <Row>
            <Col xs='6'>
              <H3>{props.mainTitle}</H3>
            </Col>

          </Row>
        </div>
      </Container> */}
    </Fragment>
  );
};

export default Breadcrumbs;
