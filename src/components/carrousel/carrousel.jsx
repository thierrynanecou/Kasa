import React, { useState } from "react";
import "./carrousel.scss";
import vectorDroit from "../../assets/Vector droit.png";
import vectorGauche from "../../assets/Vector gauche.png";

const Carrousel = ({ images }) => {
    const [currentPicture, setCurrentPicture] = useState(0);

    function changeImage(direction) {
        if (direction === "next") {
            setCurrentPicture((prevPicture) => (prevPicture + 1) % images.length);
        } else if (direction === "previous") {
            setCurrentPicture((prevPicture) => (prevPicture === 0 ? images.length - 1 : prevPicture - 1));
        }
    }

    return (
        <div className="carrousel">
            {images.length > 1 && (
                <img
                    className="previous-arrow arrow-img"
                    src={vectorGauche}
                    alt="Previous"
                    onClick={() => changeImage("previous")}
                />
            )}

            <img
                className="picture"
                src={images[currentPicture]}
                alt="Current"
            />

            {images.length > 1 && (
                <img
                    className="next-arrow arrow-img"
                    src={vectorDroit}
                    alt="Next"
                    onClick={() => changeImage("next")}
                />
            )}

            {images.length > 1 && (
                <p className="numbers">{currentPicture + 1} / {images.length}</p>
            )}
        </div>
    );
};

export default Carrousel;
