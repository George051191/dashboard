import React from 'react';
import { Modal, ModalFooter, ModalHeader } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { toast } from 'react-toastify';
import { Card, CardBody, Label, CardHeader, Col, Container, Row } from "reactstrap";
import Files from 'react-files';
import GalleryContext from '../../../_helper/Gallery';

const CommonModal1 = (props) => {
    const { smallImages, setSmallImages, pokemonImages, setPokemonImages } = React.useContext(GalleryContext)
    const [name, setName] = React.useState('')
    const styleObject = window.location.pathname.includes('pokemons') ? { display: 'flex', justifyContent: 'center' } : {}
    const onFilesChange = (files) => {
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            let uniqId = Math.floor(Math.random() * 100) + Math.floor(Math.random());
            if (window.location.pathname.includes('pokemons')) {
                setPokemonImages([...pokemonImages, { id: uniqId, image: reader.result, }])
                toast.success('Загрузка...')
                return
            }

            setSmallImages([...smallImages, { id: uniqId, image: reader.result, name: name }]);
            toast.success('Загрузка...')

        }
    }
    /*     React.useEffect(() => {
            console.log(smallImages)
        }, []) */

    return (
        <Modal style={{ alignItems: 'center' }} isOpen={props.isOpen} toggle={props.toggler} size={props.size} centered>
            <ModalHeader className='justify-content-center border-none' toggle={props.toggler}>
                {props.title}
            </ModalHeader>
            {!window.location.pathname.includes('pokemons') && <div style={{ margin: '0 auto' }} className="col-6">
                <Label>Укажите цену</Label>
                <input onChange={((e) => setName(e.target.value))} type="number" className="form-control w-100" placeholder="1500" aria-label="Имя тренера" aria-describedby="basic-addon2" />
            </div>}

            <div style={{ margin: '0 auto' }} className="col-6 p-b-25 ">
                <CardBody className='fileUploader'>


                    <Files
                        className='files-dropzone fileContainer'
                        onChange={onFilesChange}

                        style={styleObject}
                        multiple={false}
                        maxFileSize={10000000}
                        minFileSize={0}
                        clickable
                    >   {window.location.pathname.includes('pokemons') ? <Btn attrBtn={{ color: 'success', size: 'lg' }} ><i className="fa fa-file-image-o"></i></Btn>
                        : <Btn attrBtn={{ className: "mt-2 ml-50 w-100", type: "button", color: 'primary' }} >Загрузить</Btn>}
                    </Files>

                </CardBody>
            </div>
        </Modal>
    );
};

export default CommonModal1;