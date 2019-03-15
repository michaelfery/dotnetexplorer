import React from 'react';
import githubPurple from './../assets/images/github-purple.svg';
import './footer.css';

const Footer = (props: any) => (
    <footer className="footer">
        <div className="logo">
            <a href="https://github.com/michaelfery/dotnetexplorer" rel="noopener noreferrer" target="_blank">
                <img src={githubPurple} alt="Github Logo" className="logo--github" />
            </a>
        </div>
        <p className="footer__copyright">
            Made with <span>❤</span> by
            <a
                href="https://twitter.com/_mfery"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
            >
                Michaël Fery
            </a>
        </p>
    </footer>
);

export { Footer };