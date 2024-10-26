import React from "react";
import PropTypes from "prop-types";

export const JumboComponent = ({
        title,
        leadText,
        additionalText,
        buttonText,
        buttonLink,
    }) => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">{title}</h1>
                <p className="lead m-0">{leadText}</p>
                <p>{additionalText}</p>
                <a className="btn btn-primary btn-lg m-0" href={buttonLink} role="button" target="_blank">{buttonText} </a>
            </div>
        </div>
    );
};

// Establecer PropTypes
JumboComponent.propTypes = {
    title: PropTypes.string.isRequired,
    leadText: PropTypes.string.isRequired,
    additionalText: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired
};

