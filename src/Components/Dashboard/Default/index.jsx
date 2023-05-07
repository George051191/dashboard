import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import WidgetsGrid from '../Ecommerce/WidgetsGrid';
import WidgetsWrapper from '../Default/WidgetsWraper'
import OverallBalance from './OverallBalance';
import CourseBox from '../../Common/CommonWidgets/CourseBox';
import { Col } from 'react-bootstrap';
import Widgets2 from '../../Common/CommonWidgets/Widgets2';
const Dashboard = () => {

  return (
    <Fragment>
      <Breadcrumbs mainTitle='Default' parent='Dashboard' title='Default' />
      <Container fluid={true}>
        <Row className='widget-grid'>


          <OverallBalance />
          <WidgetsWrapper />

        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
