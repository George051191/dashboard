import React, { Fragment } from "react";
import { Card, CardBody, Col, Media } from "reactstrap";
import { IMAGE_GALLERY, PortfolioTitle } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";

const ListOfImageDesc = ({ smallImages, name, cost }) => {
    return (
        <Fragment>
            {smallImages.length > 0 ?
                <Col sm="12">
                    <Card className="m-t-10">

                        <CardBody>
                            <div className="my-gallery row gallery-with-description">
                                {smallImages.map((item, i) => (
                                    <figure className="col-xl-3 col-sm-6">
                                        <a href="#javascript" data-size="1600x950">
                                            <Media
                                                src={smallImages[i]}
                                                alt="Gallery"
                                                className="img-thumbnail"

                                            />
                                            <div className="caption">
                                                <h4>{name}</h4>
                                                <p>{cost}</p>
                                            </div>
                                        </a>
                                    </figure>
                                ))}

                            </div>
                        </CardBody>
                    </Card>
                </Col>
                :
                ''
            }
        </Fragment>
    )
}

export default ListOfImageDesc;
