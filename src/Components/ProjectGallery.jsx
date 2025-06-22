import React from "react";
import codeReview from '../images/CodeReview.png'
import gamefinder from '../images/GameFinder.png'
import courseList from '../images/CourseList.png'
import mobilegamefinder from '../images/mobileGamefinder.png'
import Card from "./ProjectCard";

const Projects = [
    {
        name: 'Original Binary Search Tree',
        img: courseList,
        link: 'https://github.com/SiegeTank-90/CS300H2988',
        demo: true

    },
    {
        name: 'Mobile Web GameFinder',
        img: mobilegamefinder,
        link: 'https://github.com/SiegeTank-90/GamerEvents',
        demo: true
    },
    {
        name: 'GameFinder Queue',
        img: gamefinder,
        link: 'https://github.com/SiegeTank-90/gamer_events_webpage',
        demo: false
    },
    {
        name: 'AVL Binary Search Tree',
        img: courseList,
        link: 'https://github.com/SiegeTank-90/CS300H2988/tree/DegreePlanBranch/CS300_H2988__Project2/CS300_H2988__Project2',
        demo: false
    }



]

function ProjectGallery() {
    let ProjectsArray = [];
    let DemoProjectArray = [];

    Projects.map(element => {
        if (element.demo === false) {
            ProjectsArray.push(<Card title={element.name} image={element.img} link={element.link} />)
        } else {
            DemoProjectArray.push(<Card title={element.name} image={element.img} link={element.link} />)
        }
        return null
    })


    return (<div className="ProjectGallery">
        <div className="ProjectGallery--Sectional" >
            <h2 className="Information--Title">Code Review</h2>
            <hr className="breakline" />
            <Card title={'Code Review Mobile GameFinder'} image={codeReview} link={'https://www.youtube.com/watch?v=wLCd6GJ9m_4'} />
        </div>

        <div className="ProjectGallery--Sectional" >
            <h2 className="Information--Title">Enhancements</h2>
            <hr className="breakline" />
            {ProjectsArray}
        </div>
        <div className="ProjectGallery--Sectional">
            <h3 className="Information--Title ">Originals</h3>
            <hr className="breakline" />
        </div>
        <div className="ProjectGallery--Sectional" >
            {DemoProjectArray}
        </div>
    </div>)
}

export default ProjectGallery