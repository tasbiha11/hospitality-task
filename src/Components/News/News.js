import React from 'react';
import './News.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import news2 from '../../assets/news2.jpg';
import news3 from '../../assets/news3.jpg';

import { FaCommentAlt } from 'react-icons/fa';

const News = () => {
    return (
        <div className='container'>
            <h4>HOTEL BLOGS</h4>
            <h2>Our Daily News</h2>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={news3} />
                        <Card.Body>
                            <Card.Title> <div><FaCommentAlt /><small>4 comments</small></div> <div>How to travel with Paper Map</div></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={news2} />
                        <Card.Body>
                            <Card.Title> <div><FaCommentAlt /><small>6 comments</small></div> <div>How to travel with Paper Map</div></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={news3} />
                        <Card.Body>
                            <Card.Title> <div><FaCommentAlt /><small>2 comments</small></div> <div>How to travel with Paper Map</div></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default News