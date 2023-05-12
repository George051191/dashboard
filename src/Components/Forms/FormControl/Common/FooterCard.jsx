import React, { Fragment } from "react";
import { CardFooter } from 'reactstrap'
import { Btn } from "../../../../AbstractElements";

import { toast } from "react-toastify";
const FooterCard = () => {
    return (
        <Fragment>
            <CardFooter className="text-end">
                <Btn onClick={() => toast.success('Идет генерация')} attrBtn={{ color: "primary", className: "m-r-15", type: "submit", onClick: () => toast.success('Идет генерация') }} >{'Генерация'}</Btn>

            </CardFooter>
        </Fragment>
    )
}

export default FooterCard;