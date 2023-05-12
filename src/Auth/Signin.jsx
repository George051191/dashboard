import React, { useState } from 'react';
import { Container, Row, Col, TabContent } from 'reactstrap';

import LoginTab from './Tabs/LoginTab';


const Logins = () => {
  const [selected, setSelected] = useState('simpleLogin');


  return (
    <Container fluid={true} className='p-0 login-page'>
      <Row>
        <Col xs='12'>
          <div className='login-card'>
            <div className='login-main login-tab'>

              <TabContent activeTab={selected} className='content-login'>

                <LoginTab selected={selected} />


              </TabContent>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Logins;

