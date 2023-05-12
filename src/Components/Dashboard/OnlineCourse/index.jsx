import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';

import FileManager from '../../Application/FileManager'

const OnlineCourse = () => {
  return (
    <Fragment>
      <Breadcrumbs parent='Apps' title='File Manager' mainTitle='Магазин аватаров' />
      <Container fluid={true}>
        <FileManager isNeed={true} title={'Укажите цену'} />
      </Container>
    </Fragment>
  );
};

export default OnlineCourse;
