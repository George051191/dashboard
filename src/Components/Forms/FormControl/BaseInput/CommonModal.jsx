import React from 'react';
import { Modal, ModalFooter, ModalHeader } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { toast } from 'react-toastify';

const CommonModal = (props) => {
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggler} size={props.size} centered>
            <ModalHeader className='justify-content-center border-none' toggle={props.toggler}>
                {props.title}
            </ModalHeader>
            <ModalFooter style={{ border: 'none', flexWrap: 'nowrap' }} className='justify-content-center border-none'  >
                <Btn attrBtn={{ color: 'secondary', onClick: (e) => { toast.success(props.adv); props.toggler(e) } }} >{props.buttonName}</Btn>
                <Btn attrBtn={{ color: 'primary', onClick: (e) => { props.toggler(e) } }}>{'Отмена'}</Btn>
            </ModalFooter>
        </Modal>
    );
};

export default CommonModal;