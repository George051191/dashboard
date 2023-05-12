
import React, { Fragment } from 'react';


import { CardBody } from 'reactstrap';
import ProductGrid from '../Ecommerce/Products/ProductGrid';



const FileContent = ({ title, isNeed }) => {

  return (
    <Fragment>
      <CardBody className='w-100 file-manager'>
        <div className="product-grid">
          <ProductGrid isNeed={isNeed} title={title} />
        </div>
      </CardBody>
    </Fragment>
  );
};
export default FileContent;
