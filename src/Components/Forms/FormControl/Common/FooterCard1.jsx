import React, { Fragment } from "react";
import { CardFooter } from 'reactstrap'
import { Btn } from "../../../../AbstractElements";

import { toast } from "react-toastify";
const FooterCard1 = () => {
    return (
        <Fragment>
            <CardFooter className="text-end">
                <Btn onClick={() => toast.success('Удаление')} attrBtn={{ color: 'danger', className: 'm-r-15 m-b-15', type: 'submit' }}>{'Очистить базу данных'}</Btn>
                <Btn onClick={() => toast.success('Идет сохранение')} attrBtn={{ color: "primary", className: " m-b-15", type: "submit" }} >{'Сохранить'}</Btn>

            </CardFooter>
        </Fragment>
    )
}

export default FooterCard1;