import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';

import OverallBalance from './OverallBalance';
import CourseBox from '../../Common/CommonWidgets/CourseBox';
import { Col } from 'react-bootstrap';

const Dashboard = () => {
  const data = {
    title: 'Количество боев за сегодня',
    course: '51',
    icon: 'course-2',
    link: 'За период',
    color: 'warning',
  }
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Статистика' parent='Dashboard' title='Статистика' />
      <Container fluid={true}>
        <Row className='widget-grid'>

          <OverallBalance />
          <Col sm='6' xl='3' lg='6' className='box-col-6'>
            <CourseBox data={data} />
          </Col>
          {/*    <TotalUserAndFollower /> */}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
