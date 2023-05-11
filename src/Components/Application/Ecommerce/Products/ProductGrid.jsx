
import React, { Fragment, useContext, useState } from 'react';

import { Label, Form, Input } from "reactstrap";
import GalleryContext from '../../../../_helper/Gallery';
import ListOfImageDesc from '../../../Gallery/ImageGallery/ListOfImgDesc';
import { toast } from 'react-toastify';


const ProductGrid = () => {
  //for real data
  /*   const [smallImages, setSmallImages] = useContext(GalleryContext) */

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
      let uniqId = Math.floor(Math.random() * 100);
      /*  setSmallImages([...smallImages, { image: reader.result, name: name, cost: cost }]) */
      setImages([...smallImages, { id: uniqId, image: reader.result, name: name, cost: cost }]);
      toast.success('Загрузка...')
    };
  }
  const deleteCard = (itemid) => {
    const filteredArray = smallImages.filter((el) => {
      return el.id !== itemid
    })
    /*  setSmallImages(filteredArray) */
    setImages(filteredArray)
  }
  return (
    <Fragment>
      <div class="container-xl w-100 m-l-0 m-r-0">
        <div class="row display-custom-user">
          <div class="col-sm">
            <Label>{'Введите имя тренера'}</Label>
            <input onChange={((e) => setName(e.target.value))} type="text" class="form-control w-100" placeholder="Имя" aria-label="Имя тренера" aria-describedby="basic-addon2" />
          </div>
          {/*  <div class="col-sm">
            <Label>{'Введите стоимость'}</Label>
            <input onChange={((e) => setCost(e.target.value))} type="text" class="form-control w-100" placeholder="Цена" aria-label="Стоимость аватара" aria-describedby="basic-addon2" />
          </div> */}
          <div class="col-md m-t-25">
            <Form className='d-inline-flex w-100'>
              <Input id='upfile' multiple type='file' onChange={(e) => readUrl(e)} />
            </Form>
          </div>
        </div>
      </div>
      <ListOfImageDesc callBack={deleteCard} name={name} cost={cost} smallImages={smallImages} withDesc={true} />
    </Fragment>

  )

};

export default ProductGrid;
