import React from "react";
import PropTypes from "prop-types";
import { footerData } from "../data";

export const Footer = ({ brandName,links, currentYear, companyName, companyLink, reservedMessage }) => {

    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-center align-items-center col-sm-12 col-md-12 col-lg-2 col-xl-4">
                        <div>{brandName}</div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4 align-items-center justify-content-center d-flex">
                        <ul className="navbar-nav d-flex flex-row gap-3">
                            {links.map((link, index) => (
                                <li className="nav-item" key={index}>
                                    <a className="nav-link" href={link.href} aria-label={link.label}>
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="d-flex justify-content-center align-items-center m-0 text-end col-sm-12 col-md-12 col-lg-5 col-xl-4">
                        &copy; {currentYear}{" "}
                        <a
                            href={companyLink}
                            className="footer-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${companyName}'s GitHub`}
                        >
                            {companyName}
                        </a>, {reservedMessage}
                    </p>
                </div>
            </div>
        </footer>
    );    
};

Footer.propTypes = {
    brandName: PropTypes.string.isRequired,
    currentYear: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companyLink: PropTypes.string.isRequired,
    reservedMessage: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
};
  
Footer.defaultProps = footerData;
