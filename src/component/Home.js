import React from 'react';
import Cards from './Cards';
import Presentation from './presentation';
import Slideimage from './Slideimage';


const Home = () => {
    return (
        <>
            <Slideimage/>
            <Presentation/>
            <section className='cards'>
                <div className='body'>
                    <div className='container'>
                        <Cards/>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export default Home;
