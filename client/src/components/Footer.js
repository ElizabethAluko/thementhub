// client/src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-700 py-4">
            <div className="container mx-auto text-center">
                <p className="text-blue-600 text-sm">&copy; 2023 AccountaHub</p>
                <div className="mt-2">
                    <a href="https://github.com/yourgithub" target="_blank" className="text-blue-500 hover:text-blue-700 mx-2">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="text-blue-500 hover:text-blue-700 mx-2">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/yourtwitter" target="_blank" className="text-blue-500 hover:text-blue-700 mx-2">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
