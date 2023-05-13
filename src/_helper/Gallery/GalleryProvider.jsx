import React, { useEffect, useState } from 'react';
import Context from './index';
import axios from 'axios';
import { BigImageApi, ImageLightApi, MasonryApi } from '../../api';
import trainer1 from '../../assets/images/trainer-1.svg';
import trainer2 from '../../assets/images/trainer-2.svg';
import trainer3 from '../../assets/images/trainer-3.svg';
import trainer4 from '../../assets/images/trainer-4.svg';
import pokemon1 from '../../assets/images/pokemon-1.jpg';
import pokemon2 from '../../assets/images/pokemon-2.jpg';
import pokemon3 from '../../assets/images/pokemon-3.jpg';
import pokemon4 from '../../assets/images/pokemon-4.jpg';

const startArray = [
    { id: 1, image: trainer1, name: 1500 },
    { id: 2, image: trainer1, name: 1500 },
    { id: 3, image: trainer2, name: 1500 },
    { id: 4, image: trainer1, name: 15000 },
    { id: 5, image: trainer3, name: 1500 },
    { id: 6, image: trainer2, name: 1700 },
    { id: 7, image: trainer4, name: 1500 },
    { id: 8, image: trainer4, name: 12500 }
]
const pokemonArray = [
    { id: 1, image: pokemon1, },
    { id: 2, image: pokemon2, },
    { id: 3, image: pokemon4, },
    { id: 4, image: pokemon3, },
    { id: 5, image: pokemon2, },
    { id: 6, image: pokemon1, },
    { id: 7, image: pokemon3, },
    { id: 8, image: pokemon4, }
]
const GalleryProvider = (props) => {
    const [images, setImage] = useState([]);
    const [smallImages, setSmallImages] = useState([]);
    const [pokemonImages, setPokemonImages] = useState([])
    const [name, setName] = useState('')
    const [masonryImg, setMasonryImg] = useState([]);
    useEffect(() => {
        setSmallImages(startArray)
        setPokemonImages(pokemonArray)
    }, [startArray, pokemonArray])
    /* useEffect(() => {
        const getChartData = async () => {
            try {
                axios.get(ImageLightApi).then((response) => {
                    setImage(response.data.src);
                });

                axios.get(BigImageApi).then((response) => {
                    setSmallImages(response.data.src);
                });

                axios.get(MasonryApi).then((response) => {
                    setMasonryImg(response.data);
                });

            } catch (error) {
                console.log('cancelled', error);
            }
        };
        getChartData();
    }, [setImage, setSmallImages, setMasonryImg]);
 */
    return (
        <Context.Provider
            value={{
                ...props,
                images,
                smallImages,
                masonryImg,
                name,
                pokemonImages,
                setName,
                setSmallImages,
                setPokemonImages
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default GalleryProvider;