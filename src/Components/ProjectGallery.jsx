import React from "react";
import ecommerce from '../images/ecommerce.png'
import findaflag from '../images/findaflag.png'
import jobSnapshot from '../images/jobSnapshot.png'
import webRemote from '../images/web-remote.png'
import Card from "./ProjectCard";

const Projects = [
    {
        name: 'E-Commerce Demo Page',
        img: ecommerce,
        link: 'https://siegetank-90.github.io/eCommerceDemo/'
    },
    {
        name: 'Countries Database',
        img: findaflag,
        link: 'https://siegetank-90.github.io/findaflag/'
    },
    {
        name: 'Web-Remote Demo',
        img: webRemote,
        link: 'https://github.com/SiegeTank-90/web-remote2'
    },
    {
        name: 'Jobs Listings Search',
        img: jobSnapshot,
        link: 'https://github.com/SiegeTank-90/jobFilter'
    }
]

function ProjectGallery() {

    let ProjectsArray = Projects.map(element => {
        return <Card title={element.name} image={element.img} link={element.link} />
    }
    )


    return (<div className="ProjectGallery">
        {ProjectsArray}
    </div>)
}

export default ProjectGallery