import React, { useState } from 'react';
import { Container, Row, Col, TabContent, TabPane } from 'reactstrap';
import NavAuth from './Nav';
import LoginTab from './Tabs/LoginTab';
import AuthTab from './Tabs/AuthTab';
import LoginOne from '../Components/Pages/Auth/LoginOne';

const Logins = () => {
  const [selected, setSelected] = useState('simpleLogin');

  const callbackNav = (select) => {
    setSelected(select);
  };

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

