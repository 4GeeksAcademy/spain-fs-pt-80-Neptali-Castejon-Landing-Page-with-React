import React, { useState } from "react";
import PropTypes from "prop-types";
import defaultImage from '../../img/rigo-baby.jpg';
import '../../styles/index.css';

export const CardComponent = ({ title, text, imageUrl }) => {
    const buttonText = "Learn More!";
    const [imgSrc, setImgSrc] = useState(imageUrl); // Estado para manejar la URL de la imagen

    const handleError = () => {
        setImgSrc(defaultImage); // Cambia a la imagen por defecto si hay un error
    };

    return (
        <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card d-flex flex-column h-100 text-center">
                <img 
                    src={imgSrc} 
                    className="card-img-top custom-img" // Clase CSS personalizada
                    alt={title} 
                    onError={handleError} // Maneja el error de carga de imagen
                />
                <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text flex-grow-1">{text}</p>
                </div>
                <div className="card-footer">
                    <a 
                        href="https://example.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary mt-auto">
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
};

CardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
};
