import React, { useEffect } from 'react';
import Users from '../../assets/img/users.svg';
import Circle from '../../assets/icons/circle.svg';
import CreditCard from '../../assets/img/credit-card.svg';
import DecorationCircle from '../../assets/img/discover.svg';

const Discover = () => {
    useEffect(() => {
        const handleScroll = () => {
            const creditCard = document.querySelector('.credit-card');
            if (creditCard) {
                if (window.scrollY > 0) {
                    creditCard.style.transform = 'rotate(0deg)';
                } else {
                    creditCard.style.transform = '';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="discoverContainer">
            <div className="leftSide">
                <h1>Discover the Perfect Credit Card for You</h1>
                <img src={Circle} alt="circle" className='circle-decoration' />
                <p>
                Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today.
                </p>    
                <button className='start-btn'>Get Started <i className="fa-solid fa-arrow-right"></i></button>
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
