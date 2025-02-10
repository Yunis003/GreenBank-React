import React from 'react';
import Users from '../../assets/img/users.svg';
import Circle from '../../assets/icons/circle.svg';
import CreditCard from '../../assets/img/credit-card.svg';
import DecorationCircle from '../../assets/img/discover.svg';
const Discover = () => {
    return (
        <div className="discoverContainer">
            <div className="leftSide">
                <h1>Discover the Perfect Credit Card for You</h1>
                <img src={Circle} alt="circle" className='circle-decoration' />
                <p>
                Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today.
                </p>    
                <button className='start-btn'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
                <img src={Users} alt="users" />
            </div>  
            <div className="rightSide">
                <img src={CreditCard} alt="credit-card" className='credit-card' />
                <img src={DecorationCircle} alt="circle-decor" className='circle-decor' />
            </div>
        </div>
    );
}

export default Discover;
