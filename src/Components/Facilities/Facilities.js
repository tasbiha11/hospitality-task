import React from 'react';
import Card from 'react-bootstrap/Card';

import './Facilities.css';

const Facilities = () => {
    return (
        <div className='top'>
            <h4>OUR SERVICE</h4>
            <h2>Hotel Facilities</h2>
            <div className='row justify-content-center mb-5 mt-3'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Pick Up and Drop</Card.Title>
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
                            <Card.Title>Parking Space</Card.Title>
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
                            <Card.Title>Room Service</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Swimming Pool</Card.Title>
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
                            <Card.Title>Fiber Internet</Card.Title>
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
                            <Card.Title>Breakfast</Card.Title>
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