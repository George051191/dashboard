
import React, { Fragment, useState } from 'react';

import { Label, Form, Input, CardBody } from "reactstrap";
import { Btn } from '../../../../AbstractElements';
import Files from 'react-files';
import ListOfImageDesc from '../../../Gallery/ImageGallery/ListOfImgDesc';
import { toast } from 'react-toastify';


const ProductGrid = ({ title, isNeed }) => {
  //for real data
  /*   const [smallImages, setSmallImages] = useContext(GalleryContext) */

  const [name, setName] = useState('')
  const [cost, setCost] = useState()
  const [smallImages, setImages] = useState([])
  const [files, setFile] = useState();
  const onFilesChange = (files) => {
    setFile(files)
  }
  const readUrl = () => {
    if (!files) return;
    var mimeType = files.type;

    /*  */
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      let uniqId = Math.floor(Math.random() * 100) + Math.floor(Math.random());


      setImages([...smallImages, { id: uniqId, image: reader.result, name: name, cost: cost }]);
      toast.success('Загрузка...')
    };
  }
  const deleteCard = (itemid) => {

    const filteredArray = smallImages.filter((el) => {

      return el.id !== itemid
    })
    /*  setSmallImages(filteredArray) */
    console.log(filteredArray)
    setImages(filteredArray)
  }

  React.useEffect(() => {
    readUrl()
    console.log(files)
  }, [files])
  return (
    <Fragment>
      <div className="container-xl w-100 m-l-0 m-r-0">
        <div className="row w-100 display-custom-user">
          {isNeed && <div className="col-6">
            <Label>{title}</Label>
            <input onChange={((e) => setName(e.target.value))} type="number" className="form-control w-100" placeholder="1500" aria-label="Имя тренера" aria-describedby="basic-addon2" />
          </div>}

          <div className="col-4 ">
            <CardBody className='fileUploader'>

              {/*  <Input style={{}} id='upfile' multiple type='file' onChange={(e) => readUrl(e)} /> */}
              <Files
                className='files-dropzone fileContainer'
                onChange={onFilesChange}


                multiple={false}
                maxFileSize={10000000}
                minFileSize={0}
                clickable
              >
                <Btn attrBtn={{ className: "mt-2 ml-50", type: "button", color: 'primary' }} >Загрузить</Btn>
              </Files>

            </CardBody>
          </div>
        </div>
      </div>
      <ListOfImageDesc callBack={deleteCard} name={name} cost={cost} smallImages={smallImages} withDesc={true} />
    </Fragment>

  )

};

export default ProductGrid;
