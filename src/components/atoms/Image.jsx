import React from "react";
import gato from "../../assets/images/gato.webp";

function image (im, alt, className='') {
    return (
        <img
        src={im}
        alt={alt}
        className={className}
        />
    )
}
export default image;