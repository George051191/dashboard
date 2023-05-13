import React, { Fragment } from "react";
import { Card, CardBody, Col, Media } from "reactstrap";
import GalleryContext from "../../../_helper/Gallery";

const ListOfImageDesc = ({ callBack, name, cost }) => {
    const { smallImages, pokemonImages } = React.useContext(GalleryContext)
    const currrentArray = window.location.pathname.includes('pokemons') ? pokemonImages : smallImages
    const currentPadding = window.location.pathname.includes('pokemons') ? '11px' : '23px'
    const currentBotttom = window.location.pathname.includes('pokemons') ? '11px' : '0'
    return (
        <Fragment>
            {currrentArray.length > 0 ?
                <Col sm="12">
                    <Card className="m-t-10">

                        <CardBody>
                            <div className="my-gallery row  gallery-with-description">
                                {currrentArray.map((item, i) => (

                                    <figure key={i} style={{ border: '1px solid #e4e6ec', display: 'flex', padding: 0 }} className="col-xl-3 col-sm-6 position-relative">
                                        <p style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: 'fit-content' }} data-size="1600x950">

                                            <Media
                                                src={currrentArray[i].image}
                                                alt="Gallery"
                                                className=""
                                                style={{ width: '56%', height: '78%', paddingTop: currentPadding, paddingBottom: currentBotttom }}
                                            />
                                            {window.location.pathname.includes('pokemons') && <span onClick={(e) => { e.preventDefault(); callBack(currrentArray[i].id) }} style={{ top: 10, right: 20 }} className="position-absolute  " attrLI={{ className: 'border-0 ' }}>
                                                <a className='theme-text' href='#javascript'>
                                                    <i style={{ transform: 'scale(1.5)' }} className='fa fa-trash-o'></i>
                                                </a>
                                            </span>}
                                            {!window.location.pathname.includes('pokemons') && <div style={{ alignSelf: 'baseline', width: '100%', borderTop: '1px solid #e4e6ec', margin: 0, marginTop: '5px' }} className="caption">
                                                <h4 style={{ marginLeft: '20px' }} className="m-l-4" >{currrentArray[i].name}
                                                    <span onClick={(e) => { e.preventDefault(); callBack(currrentArray[i].id) }} style={{ top: 10, right: 20 }} className="position-absolute  " attrLI={{ className: 'border-0 ' }}>
                                                        <a className='theme-text' href='#javascript'>
                                                            <i className='fa fa-trash-o'></i>
                                                        </a>
                                                    </span>
                                                </h4>
                                                <p>{currrentArray[i].cost}

                                                </p>

                                            </div>}
                                        </p>
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
