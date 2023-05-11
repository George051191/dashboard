import React, { Fragment, useCallback } from "react";
import { Card, CardBody, Col, Media } from "reactstrap";
import { IMAGE_GALLERY, PortfolioTitle } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";

const ListOfImageDesc = ({ smallImages, callBack, name, cost }) => {


    return (
        <Fragment>
            {smallImages.length > 0 ?
                <Col sm="12">
                    <Card className="m-t-10">

                        <CardBody>
                            <div className="my-gallery row  gallery-with-description">
                                {smallImages.map((item, i) => (
                                    <figure className="col-xl-3 col-sm-6 position-relative">
                                        <a href="#javascript" data-size="1600x950">

                                            <Media
                                                src={smallImages[i].image}
                                                alt="Gallery"
                                                className="img-thumbnail"

                                            />
                                            <div className="caption">
                                                <h4 >{smallImages[i].name}
                                                    <span onClick={() => callBack(smallImages[i].id)} style={{ top: 10, right: 20 }} className="position-absolute  " attrLI={{ className: 'border-0 ' }}>
                                                        <a className='theme-text' href='#javascript'>
                                                            <i className='fa fa-trash-o'></i>
                                                        </a>
                                                    </span>
                                                </h4>
                                                <p>{smallImages[i].cost}

                                                </p>

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
