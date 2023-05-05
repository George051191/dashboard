import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import LeftGrid from './LeftGrid';
import RightGrid from './RightGrid';
import BaseInput from '../../Forms/FormControl/BaseInput';
import HtmlControlClass from '../../Forms/FormControl/BaseInput/HtmlControl';

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
