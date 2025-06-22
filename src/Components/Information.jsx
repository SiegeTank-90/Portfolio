import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ProjectGallery from './ProjectGallery';


function Information() {
    return (
        <div className='Information'>
            <>
                <h2 className='Information--Name'> C.J. Cline </h2>
                <h1 className='Information--Job'> Junior Developer </h1>
                <p className='Information--Quote'>
                    "To make our way, we must have firm resolve, persistence, tenacity. We must
                    gear ourselves to work hard all the way. We can never let up."{' '}
                    <span className='Quote--From'>-Ralph Bunche </span>
                </p>

                <div className='Information--Buttons-Row'>
                    <a href="https://github.com/SiegeTank-90" target='_blank' rel='noreferrer'>

                        <button className='Information--Buttons-Row--Button'>
                            <FontAwesomeIcon icon={faGithub} size='2x' />
                            <p className='Information--Buttons-Row--Name'>Github</p>
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/carl-cline-733411a3/" target='_blank' rel='noreferrer'>
                        <button className='Information--Buttons-Row--Button'>
                            <FontAwesomeIcon icon={faLinkedin} size='2x' />
                            <p className='Information--Buttons-Row--Name'>Linkedin</p>
                        </button>
                    </a>
                </div>
                <h2 className="Information--Title">Narratives</h2>
                <hr className="breakline" />
                <div className='Information--Buttons-Row'>
                    <a href="/Milestone1_Narraitve_SoftwareDesignAndEngneering.pdf" target='_blank' rel='noreferrer'>
                    <button className='Information--Buttons-Row--Button--Footer'>
                        <FontAwesomeIcon icon={faFile} size='2x' />
                        <p className='Information--Buttons-Row--Name'>Milestone 1</p>
                    </button>
                    </a>
                    <a href="/MileStone2_Narrative_AlgorithmsAndDataStructures.pdf" target='_blank' rel='noreferrer'>
                    <button className='Information--Buttons-Row--Button--Footer'>
                        <FontAwesomeIcon icon={faFile} size='2x' />
                        <p className='Information--Buttons-Row--Name'>Milestone_2</p>
                    </button>
                    </a>
                    <a href="/Milestone_3_Narrative_Databaes.pdf" target='_blank' rel='noreferrer'>
                    <button className='Information--Buttons-Row--Button--Footer'>
                        <FontAwesomeIcon icon={faFile} size='2x' />
                        <p className='Information--Buttons-Row--Name'>Milestone 3</p>
                    </button>
                    </a>
                    <a href="/ProfessionalAssesments.pdf" target='_blank' rel='noreferrer'>
                    <button className='Information--Buttons-Row--Button--Footer'>
                        <FontAwesomeIcon icon={faFile} size='2x' />
                        <p className='Inforsmation--Buttons-Row--Name'>Assessment</p>
                    </button>
                    </a>
                </div>

                <ProjectGallery />

            </>

        </div >
    )
}

export default Information