import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';

import BaseInput from '../../Forms/FormControl/BaseInput';


const Ecommerce = () => {
  return (
    <Fragment>
      <Breadcrumbs parent='Apps' title='File Manager' mainTitle='Настройки' />
      <Container fluid={true}>

        <BaseInput />
      </Container>
    </Fragment>
  );
};

export default Ecommerce;
