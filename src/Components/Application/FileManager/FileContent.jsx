import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import errorImg from '../../../assets/images/search-not-found.png';
import { toast } from 'react-toastify';
import { H6, LI, P, Image } from '../../../AbstractElements';
import { CardBody } from 'reactstrap';
import ProductGrid from '../Ecommerce/Products/ProductGrid';
import { FileApi } from '../../../api';
import ProductContext from '../../../_helper/Ecommerce/Product';

const FileContent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, , setSearchTerm] = useState('');
  const [myfile = [{ id: 1, status: '', img: '', name: 'trener', price: 20, not: true, discountPrice: 5 }], setMyFile] = useState([]);
  const { productItem, setProductItem } = React.useContext(ProductContext);
  useEffect(() => {
    axios.get(FileApi).then((response) => {
      setMyFile(response.data);
    });
  }, []);



  const filelist = myfile
    .filter((data) => {
      if (searchTerm == null) {
        return data;
      } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return data;
      }
    })
    .map((data, i) => {
      return (
        <LI attrLI={{ className: 'file-box' }} key={i}>
          <div className='file-top'>
            <i className={data.icon}></i>
            <i className='fa fa-ellipsis-v f-14 ellips'></i>
          </div>
          <div className='file-bottom'>
            <H6>{data.name}</H6>
            <P attrPara={{ className: 'mb-0 mb-1' }}>{data.size}</P>
            <P>
              <b>{'last open'} : </b>
              {data.modify}
            </P>
          </div>
        </LI>
      );
    });


  return (
    <Fragment>

      {filelist.length ? (
        <CardBody className='w-100 file-manager'>


          <div className="product-grid">

            <ProductGrid items={myfile} />
          </div>



        </CardBody>
      ) : (
        <Image attrImage={{ className: 'img-fluid m-auto', src: errorImg, alt: '' }} />
      )}
    </Fragment>
  );
};
export default FileContent;
