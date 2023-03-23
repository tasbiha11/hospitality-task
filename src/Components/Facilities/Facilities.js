import React from 'react';
import Card from 'react-bootstrap/Card';
import { AiFillCar, AiOutlineWifi } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import { FaBed, FaSwimmingPool } from 'react-icons/fa';
import { BsCupHotFill } from 'react-icons/bs';

import './Facilities.css';

const Facilities = () => {
    return (
        <div className='top'>
            <h4>OUR SERVICE</h4>
            <h2>Hotel Facilities</h2>
            <div className='row g-5 mt-2'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title> <div>Pick Up and Drop</div> <div className='icon'><ImLocation /></div></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title> <div>Parking Space</div> <div className='icon'><AiFillCar /></div> </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title> <div>Room Service</div> <div className='icon'><FaBed /></div> </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='row g-5 mt-2'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title> <div>Swimming Pool</div> <div className='icon'><FaSwimmingPool /></div> </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title> <div>Fiber Internet</div> <div className='icon'><AiOutlineWifi /> </div> </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title> <div>Breakfast</div> <div className='icon'><BsCupHotFill /></div> </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Facilities