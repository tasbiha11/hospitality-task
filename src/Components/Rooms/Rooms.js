import React from 'react';
import './Rooms.css';
import { BsFillCartCheckFill } from 'react-icons/bs';

import familyroom from '../../assets/family-room.jpg';
import doubleroom from '../../assets/double-room.jpg';
import singleroom from '../../assets/single-room.jpg';


const Rooms = () => {
    return (
        <div className='room-top'>
            <h4>FOR YOU</h4>
            <h2>Our Favourite Rooms</h2>
            <div className='row g-5'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='rooms'>
                        <img className='room-img' src={doubleroom} alt="double room" />
                        <div className='room'>
                            <p>2 Beds • 50sqm • Parking</p>
                            <h3>Standard Room</h3>
                            <p>From <span>$300</span>/Night</p>
                        </div>
                        <button>Add to cart <BsFillCartCheckFill /></button>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='rooms'>
                        <img className='room-img' src={familyroom} alt="family room" />
                        <div className='room'>
                            <p>1 Bed • 60sqm • Parking</p>
                            <h3>Premium Room</h3>
                            <p>From <span>$200</span>/Night</p>
                        </div>
                        <button>Add to cart <BsFillCartCheckFill /></button>
                    </div>

                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='rooms'>
                        <img className='room-img' src={singleroom} alt="single room" />
                        <div className='room'>
                            <p>1 Bed • 30sqm • Parking</p>
                            <h3>Single Room</h3>
                            <p>From <span>$100</span>/Night</p>
                        </div>
                        <button>Add to cart <BsFillCartCheckFill /></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Rooms