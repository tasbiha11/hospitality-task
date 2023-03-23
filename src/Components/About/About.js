import React from 'react';
import './About.css';

import swim from '../../assets/swim.jpg';

const About = () => {
    return (
        <div className='row g-5 m-5'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <h4>WELCOME TO LUXURY</h4>
                <h2>Our Hotel has been best for 20 years</h2>
                <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, recusandae, atque quasi id dolorum dolores amet eveniet doloremque quae dolor, consequuntur quas? In neque sapiente voluptate est error autem. Architecto blanditiis consequatur voluptatum amet sapiente voluptatibus neque error soluta quibusdam, corporis, harum iste ex beatae sint optio natus ab ullam sit mollitia animi ipsum. Necessitatibus asperiores veniam sit quam, ex facere praesentium nostrum non eos obcaecati repudiandae aperiam magnam voluptatem nobis eius quaerat consectetur dolores, dignissimos, quidem corporis sunt labore ipsum fugiat. Tempora laudantium cum id quo. Commodi nam quos, consequuntur, velit vel ex aliquid magnam architecto dolore a numquam?</p>
                <i>CEO</i>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <img className='room-img' src={swim} alt="swim" />
            </div>
        </div>

    )
}

export default About