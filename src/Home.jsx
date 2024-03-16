import React from 'react';
import homeImage from './assets/image-home.png';
import icon from './assets/icon.png'
import Header from './Header.jsx'

function Home() {
    return (
        <div>
            <Header></Header>
            <div class="home-flex">
                <div class="home-text">
                <h1>Team Finder  </h1>
                <p1>is a cutting-edge application that</p1>
                <p2>revolutionizes the way teams are organized and managed. </p2>
                </div>
                <div className="hide-dots-mobile">
                <img src={homeImage} alt="Home Image" />
                <span className='dothome2'></span>
                <span className='dothome1'></span>
                </div>
            </div>
            <div className='hide-dots-mobile'>
                <span className='dot1'></span>
                <span className='dot2'></span>
            </div>
            <span className='dot4'></span>
        </div >
    )
}

export default Home