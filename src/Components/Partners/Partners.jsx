import React from 'react';
import '../Partials/_main.scss';
import partners1 from '../../assets/img/upwork.svg';
import partners2 from '../../assets/img/petal.svg';
import partners3 from '../../assets/img/rakuten.svg';
import partners4 from '../../assets/img/nyt.svg';
import partners5 from '../../assets/img/vice.svg'
import partners6 from '../../assets/img/dell.svg'
const Partners = () => {
    return (
        <div className='partnersContainer'>
            <img src={partners1} alt="Partner 1" />
            <img src={partners2} alt="Partner 2" />
            <img src={partners3} alt="Partner 3" />
            <img src={partners4} alt="Partner 4" />
            <img src={partners5} alt="Partner 5" />
            <img src={partners6} alt="Partner 6" />
        </div>
    );
}

export default Partners;
