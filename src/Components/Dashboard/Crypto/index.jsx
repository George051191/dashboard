import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import LeftGrid from './LeftGrid';
import MainGrid from './MainGrid';
import RightGrid from './RightGrid';
import TooltipForm from '../../Forms/FormControl/TooltipForm';
import BasicInputCard1 from '../../Forms/FormControl/InputGroups/BasicInputCard1';
import { Col, Card, CardBody, FormGroup, Label, Input, InputGroup, InputGroupText } from 'reactstrap';
import { toast } from 'react-toastify';
const Crypto = () => {
  return (
    <Fragment>
      <Breadcrumbs parent='Apps' title='File Manager' mainTitle='Генерация' />
      <Container fluid={true}>
        <BasicInputCard1 />
      </Container>
    </Fragment>
  );
};

export default Crypto;
