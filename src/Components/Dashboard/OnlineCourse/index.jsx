import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import ActiveLessons from './ActiveLessons';
import ActivityHours from './ActivityHours';
import Calender from '../../Common/CommonWidgets/Calender';
import GreetingCard2 from './GreetingCard2';
import GreetingGrid from './GreetingGrid';
import LearningOverview from './LearningOverview';
import MyCourse from './MyCourse';
import TodayProgress from './TodayProgress';
import UpcomingEvents from './UpcomingEvents';
import UpcomingSchedule from './UpcomingSchedule';
import FileManager from '../../Application/FileManager'

const OnlineCourse = () => {
  return (
    <Fragment>
      <Breadcrumbs parent='Apps' title='File Manager' mainTitle='Магазин аватаров' />
      <Container fluid={true}>
        <FileManager />
      </Container>
    </Fragment>
  );
};

export default OnlineCourse;
