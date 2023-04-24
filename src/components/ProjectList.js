import React from "react";
import PropTypes from "prop-types";

export default function ProjectList({allProjects, selected}) {
    return (
        <div>
            {allProjects.map((item, index) => {return (<img key={index} src={item.img} alt="" />)})}
        </div>
    )
}

ProjectList.propTypes = {
    allProjects: PropTypes.array
}