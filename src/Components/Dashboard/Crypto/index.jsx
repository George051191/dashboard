import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';

import BasicInputCard3 from '../../Forms/FormControl/InputGroups/BasicInputCard3';

const Crypto = () => {
  return (
    <Fragment>
      <Breadcrumbs parent='Apps' title='' mainTitle='Генерация' />
      <Container fluid={true}>
        <BasicInputCard3 />
      </Container>
    </Fragment>
  );
};

export default Crypto;
