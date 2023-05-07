import React, { Fragment } from "react";
import { CardFooter } from 'reactstrap'
import { Btn } from "../../../../AbstractElements";
import { Submit, Cancel } from "../../../../Constant";
import { toast } from "react-toastify";
const FooterCard1 = () => {
    return (
        <Fragment>
            <CardFooter className="text-end">
                <Btn onClick={() => toast.success('Идет генерация')} attrBtn={{ color: "primary", className: "m-r-15 m-b-15", type: "submit" }} >{'Сохранить'}</Btn>

            </CardFooter>
        </Fragment>
    )
}

export default FooterCard1;