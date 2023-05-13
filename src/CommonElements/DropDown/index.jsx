import React from 'react';
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn } from '../../AbstractElements'



const Basic = () => {
  return (

    <div className="dropdown-basic w-54">
      <Dropdown className="dropdown">
        <Btn style={{ padding: '9px 15px' }} attrBtn={{ color: 'primary', className: 'dropbtn p-t-9 p-b-9  p-r-15 p-l-15' }} >{'Выбрать'} <span><i className="icofont icofont-arrow-down"></i></span></Btn>
        <DropdownMenu className="dropdown-content">
          <DropdownItem disabled={true} href="#">{'За день'}</DropdownItem>
          <DropdownItem disabled={true} href="#">{'За час'}</DropdownItem>

        </DropdownMenu>
      </Dropdown>
    </div>

  );
};

export default Basic;