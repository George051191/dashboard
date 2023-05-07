
import React, { Fragment, useContext, useState } from 'react';

import { CardBody, CardHeader, Label, Form, Input } from "reactstrap";
import Files from 'react-files';
import ListOfImageDesc from '../../../Gallery/ImageGallery/ListOfImgDesc';
import { toast } from 'react-toastify';


const ProductGrid = ({ items }) => {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('')
  const [cost, setCost] = useState()
  const [smallImages, setImages] = useState([])
  const readUrl = (event) => {
    if (event.target.files.length === 0) return;
    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      setImages([...smallImages, { image: reader.result, name: name, cost: cost }]);
      toast.success('Загрузка...')
    };
  }
  return (
    <Fragment>


      <div class="container w-100">
        <div class="row">
          <div class="col-sm">
            <Label>{'Введите имя тренера'}</Label>
            <input onChange={((e) => setName(e.target.value))} type="text" class="form-control w-100" placeholder="Имя" aria-label="Имя тренера" aria-describedby="basic-addon2" />
          </div>
          <div class="col-sm">
            <Label>{'Введите стоимость'}</Label>
            <input onChange={((e) => setCost(e.target.value))} type="text" class="form-control w-100" placeholder="Цена" aria-label="Стоимость аватара" aria-describedby="basic-addon2" />
          </div>
          <div class="col-sm m-t-25">
            <Form className='d-inline-flex'>


              <Input id='upfile' multiple type='file' onChange={(e) => readUrl(e)} />

            </Form>

          </div>
        </div>
      </div>
      <ListOfImageDesc name={name} cost={cost} smallImages={smallImages} withDesc={true} />
    </Fragment>

  )

};

export default ProductGrid;
