import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import pool from '../../assets/pool.jpg';
import sunset from '../../assets/susnet.jpg';
import bar from '../../assets/bar.jpg';

import './ImgCarousel.css';

const ImgCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sunset}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Sunset With a View</h3>
                    <p>Enjoy the most beautiful sunset in our luxurious hotel</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pool}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Infinity Pool</h3>
                    <p>Our pool provides a breathtaking view of the infinity</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bar}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Food and Drinks</h3>
                    <p>
                        Delisious food with healthy choise of foods
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ImgCarousel