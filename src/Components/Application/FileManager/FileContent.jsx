
import React, { Fragment, useState } from 'react';


import { CardBody } from 'reactstrap';
import ProductGrid from '../Ecommerce/Products/ProductGrid';



const FileContent = () => {

  return (
    <Fragment>
      <CardBody className='w-100 file-manager'>
        <div className="product-grid">
          <ProductGrid />
        </div>
      </CardBody>
    </Fragment>
  );
};
export default FileContent;
