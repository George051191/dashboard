import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn, H4, P } from '../../../AbstractElements';


import { useNavigate } from 'react-router-dom';
import { Jwt_token } from '../../../Config/Config';
import man from '../../../assets/images/dashboard/profile.png';
import { handleResponse } from '../../../Services/fack.backend';

import CustomizerContext from '../../../_helper/Customizer';


const LoginTab = ({ selected }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useState(false)[0];
  const [togglePassword, setTogglePassword] = useState(false);
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);

  const [value, setValue] = useState(localStorage.getItem('profileURL' || man));
  const [name, setName] = useState(localStorage.getItem('Name'));

  useEffect(() => {
    localStorage.setItem('profileURL', man);
    localStorage.setItem('Name', 'Emay Walter');
  }, [value, name]);

  const loginAuth = async (e) => {
    e.preventDefault();
    // setLoading(true);
    setValue(man);
    setName('Emay Walter');
    if (password !== '') {
      localStorage.setItem('login', JSON.stringify(true));
      history(`${process.env.PUBLIC_URL}/dashboard/stata/${layoutURL}`);
    }
  };
  ///// вопрос что для регистрации jwt или логин !!!!
  const loginWithJwt = (e) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { email, password },
    };

    return fetch('/users/authenticate', requestOptions)
      .then(handleResponse)
      .then((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        setValue(man);
        setName('Emay Walter');
        localStorage.setItem('token', Jwt_token);
        window.location.href = `${process.env.PUBLIC_URL}/dashboard/stata/${layoutURL}`;
        return user;
      });
  };

  return (
    <Fragment>
      <Form className='theme-form'>
        <H4>{selected === 'simpleLogin' ? 'Sign In With Simple Login' : 'Sign In With Jwt'}</H4>
        <P>{'Введите ваш токен доступа'}</P>

        <FormGroup className='position-relative'>
          <Label className='col-form-label'>{'Токен'}</Label>
          <div className='position-relative'>
            <Input className='form-control' type={togglePassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} defaultValue={'test123'} required='' />
            <div className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
              <span className={togglePassword ? '' : 'show'}></span>
            </div>
          </div>
        </FormGroup>
        <div className='position-relative form-group mb-0'>



          <Btn attrBtn={{ color: 'primary', className: 'd-block w-100 mt-2', disabled: loading ? loading : loading, onClick: (e) => loginAuth(e) }}>{loading ? 'LOADING...' : 'Войти'}</Btn>



        </div>

      </Form>
    </Fragment>
  );
};

export default LoginTab;
