import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import { PlusSquare, Upload } from 'react-feather';
import errorImg from '../../../assets/images/search-not-found.png';
import { toast } from 'react-toastify';
import { H4, H6, LI, P, UL, Image } from '../../../AbstractElements';
import { CardBody, CardHeader, Form, Input, Media } from 'reactstrap';
import ProductFeatures from '../Ecommerce/Products/ProductFeatures';
import ProductGrid from '../Ecommerce/Products/ProductGrid';
import { FileApi } from '../../../api';

const FileContent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [myfile, setMyFile] = useState([]);

  useEffect(() => {
    axios.get(FileApi).then((response) => {
      setMyFile(response.data);
    });
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

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
  const getFile = () => {
    document.getElementById('upfile').click();
  };
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    let myfiles = [...myfile];
    if (selectedFile !== null) {
      myfiles.push({
        id: myfile.length + 1,
        name: selectedFile.name,
        size: `${selectedFile.size}`,
        modify: `${selectedFile.lastModifiedDate}`,
        icon: 'fa fa-file-text-o txt-info',
      });
      setMyFile(myfiles);
      toast.success('File Upload Successfully !');
    } else {
      toast.error('Plese Select at least one file !');
    }
  };
  return (
    <Fragment>
      <CardHeader>
        <Media>
          <Form className='search-file form-inline'>
            <div className='mb-0 form-group'>
              <i className='fa fa-search'></i>
              <input className='form-control-plaintext' type='text' value={searchTerm} onChange={(e) => handleChange(e)} placeholder='Search...' />
            </div>
          </Form>
          <Media body className='text-end'>
            <Form className='d-inline-flex'>
              <div className='btn btn-primary' onClick={getFile}>
                <PlusSquare />
                Add New
              </div>
              <div style={{ height: '0px', width: '0px', overflow: 'hidden' }}>
                <Input id='upfile' multiple type='file' onChange={(e) => onFileChange(e)} />
              </div>
            </Form>
            <div className='btn btn-outline-primary ms-2' onClick={onFileUpload}>
              <Upload />
              {'Upload'}
            </div>
          </Media>
        </Media>
      </CardHeader>
      {filelist.length ? (
        <CardBody className='file-manager'>
          <H4 attrH4={{ className: 'mb-3' }}>Trainers</H4> <H6>Recently Opened Files</H6>

          <div className="product-grid">

            <ProductGrid />
          </div>



        </CardBody>
      ) : (
        <Image attrImage={{ className: 'img-fluid m-auto', src: errorImg, alt: '' }} />
      )}
    </Fragment>
  );
};
export default FileContent;
