import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#333',
            color: '#fff'
        }}>
            <p>Developed by Dev Oza</p>
            <p>Contact: devojha08@email.com</p>
            <div style={{ marginTop: '10px' }}>
                <a href="https://github.com/Devojha408" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '10px' }}>
                    <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/dev-oza-84219719a/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '10px' }}>
                    <FaLinkedin size={24} />
                </a>
                <a href="https://x.com/devojha08" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                    <FaTwitter size={24} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
