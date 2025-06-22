import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ProjectGallery from './ProjectGallery';
import milestone1 from '../files/Milestone1_Narraitve_SoftwareDesignAndEngneering.pdf';
import milestone2 from '../files/MileStone2_Narrative_AlgorithmsAndDataStructures.pdf';
import milestone3 from '../files/Milestone_3_Narrative_Databaes.pdf';
import assessment from '../files/ProfessionalAssesment.pdf';


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
                <hr className="breakline" />
                <p className='Information--Subtext'>My defining trait is my resolve. I apply it to my fascination with how systems and people are forged together. I began my journey by learning UI/UX and front-end development through online courses, where I picked up React, HTML, CSS, JavaScript, and how to utilize a RESTful APIs. </p>
                <p className="Information--Subtext">Knowing that becoming a developer would require a stronger foundation, I returned to college to study computer science. I understood this would show me another side of the landscape and move me closer to enterprise-level proficiency. During my studies, I reinforced my front-end knowledge and expanded into server-side rendering with Express, as well as working with both SQL and NoSQL databases. I also gained experience with tools like Git and Node.js.</p>
                <p className="Information--Subtext">I used this time to deepen my understanding of industry standards, best practices, data structures, and algorithms.</p>
                <p className="Information--Subtext">My greatest strength—and also my greatest weakness—is that I don’t quit. I stay resilient when faced with challenges.</p>
                <hr className="breakline" />


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
                    <a href={milestone1} target='_blank' rel='noreferrer'>
                        <button className='Information--Buttons-Row--Button--Footer'>
                            <FontAwesomeIcon icon={faFile} size='2x' />
                            <p className='Information--Buttons-Row--Name'>Milestone 1</p>
                        </button>
                    </a>

                    <a href={milestone2} target='_blank' rel='noreferrer'>
                        <button className='Information--Buttons-Row--Button--Footer'>
                            <FontAwesomeIcon icon={faFile} size='2x' />
                            <p className='Information--Buttons-Row--Name'>Milestone_2</p>
                        </button>
                    </a>
                    <a href={milestone3} target='_blank' rel='noreferrer'>
                        <button className='Information--Buttons-Row--Button--Footer'>
                            <FontAwesomeIcon icon={faFile} size='2x' />
                            <p className='Information--Buttons-Row--Name'>Milestone 3</p>
                        </button>
                    </a>
                    <a href={assessment} target='_blank' rel='noreferrer'>
                        <button className='Information--Buttons-Row--Button--Footer'>
                            <FontAwesomeIcon icon={faFile} size='2x' />
                            <p className='Inforsmation--Buttons-Row--Name'>Assessment</p>
                        </button>
                    </a>
                </div>
                <h2 className="Information--Title">How To Use</h2>
                <hr className="breakline" />

                <p className="Information--Subtext">You can find a more detailed interpretation of my thoughts and the mental patterns I display when working in the narratives and assessments but the descriptions will follow shortly.  </p>
                <p className="Information--Subtext">Below is a code review of the flaws I found in the initial mobile application I made in CS360 CS360 Mobile Architecture and Design. Which you can review in the Mobile Web GameFinder Original artifact repository. At the time, I had intended to develop it into a full-stack web application.</p>
                <p className="Information--Subtext-title">The GameFinder Queue</p>
                <p className="Information--Subtext">An example enhancement is how I demonstrate my skills in software design and development as well as my understanding of databases. In building a full-stack web application and converting the SQLite mobile Database into a MongoDB database. </p>
                <p className="Information--Subtext">You may access both the original work and the enhancement by clicking on their respective links below. </p>
                <p className="Information--Subtext-title">Binary Search Tree Improvements</p>
                <p className="Information--Subtext">For my CS300 Design Data Structures and Algorithms course, I aimed to enhance the application by adding new features and improving the binary search tree’s time complexity to O(log n) through balancing. I chose to implement an AVL tree over a red-black tree, as AVL trees offer better lookup performance. Since a degree course list is more likely to be searched than modified, making it the more reliable choice.
                </p>
                <p className="Information--Subtext"> You can access both the original project and the enhanced version branches by clicking the respective links below.
                </p>


                <ProjectGallery />

            </>

        </div >
    )
}

export default Information