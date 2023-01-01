import React from 'react';


const Hero = ({ handleLogOut }) => {
    <section className='hero'>
        <nav>
            <h2>Welcome to my Gym WebSite!</h2>
            <button onClick={handleLogOut}>Logout</button>
        </nav>
    </section>
}


export default Hero;