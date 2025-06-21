import React from "react";
import ecommerce from '../images/ecommerce.png'
import codeReview from '../images/CodeReview.png'
import gamefinder from '../images/GameFinder.png'
import courseList from '../images/CourseList.png'
import jobSnapshot from '../images/jobSnapshot.png'
import webRemote from '../images/web-remote.png'
import Card from "./ProjectCard";

const Projects = [
    {
        name: 'E-Commerce Page',
        img: ecommerce,
        link: 'https://siegetank-90.github.io/eCommerceDemo/',
        demo: true

    },
    {
        name: 'Mobile Web-Remote',
        img: webRemote,
        link: 'https://siegetank-90.github.io/web-remote2',
        demo: true
    },
    {
        name: 'Jobs Listings Search',
        img: jobSnapshot,
        link: 'https://siegetank-90.github.io/jobFilter',
        demo: true

    }, 
    {
        name: 'CodeReview Mobile GameFinder',
        img: codeReview,
        link: 'https://www.youtube.com/watch?v=wLCd6GJ9m_4',
        demo: false

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
            {ProjectsArray}
        </div>
        <div className="ProjectGallery--Sectional">
            <h3 className="Information--Title ">Demos</h3>
            <hr className="breakline" />
        </div>
        <div className="ProjectGallery--Sectional" >
            {DemoProjectArray}
        </div>
    </div>)
}

export default ProjectGallery