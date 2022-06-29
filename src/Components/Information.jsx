import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ProjectGallery from './ProjectGallery';


function Information() {
    return (
        <div className='Information'>
            <div>
                <h2 className='Information--Name'> C.J. Cline </h2>
                <h1 className='Information--Job'> Junior Front-End Developer </h1>
                <p className='Information--Quote'>
                    "To make our way, we must have firm resolve, persistence, tenacity. We must
                    gear ourselves to work hard all the way. We can never let up."{' '}
                    <span className='Quote--From'>-Ralph Bunche </span>
                </p>
                <div className='Information--Buttons-Row'>
                    <button className='Information--Buttons-Row--Button'>
                        {' '}
                        <FontAwesomeIcon icon={faGithub} size='2x' />
                        <p className='Information--Buttons-Row--Name'>Github</p>
                    </button>
                    <button className='Information--Buttons-Row--Button'>
                        {' '}
                        <FontAwesomeIcon icon={faLinkedin} size='2x' />
                        <p className='Information--Buttons-Row--Name'>Linkedin</p>
                    </button>
                    <button className='Information--Buttons-Row--Button'>
                        {' '}
                        <FontAwesomeIcon icon={faFile} size='2x' />
                        <p className='Information--Buttons-Row--Name'>Resume</p>
                    </button>
                </div>
                <ProjectGallery />
            </div>

        </div>
    )
}

export default Information