import React from 'react';
import './rating.scss';
import starGrey from "../../assets/starGrey.png";
import starRed from "../../assets/starRed.png";


const Rating = ({ rating }) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        const ratingStar = (i < rating) ? starRed : starGrey;
        stars.push(<img src={ratingStar} alt='rating' key={i} className="rating-star" />);
    }

    return (
        <div>
            {stars}
        </div>
    );
}

export default Rating;
