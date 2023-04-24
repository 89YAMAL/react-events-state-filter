import React from "react";
import { allProjects } from "./Data";
import { useState } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList"

export default function Portfolio() {
    let [selected, setSelected] = useState('All');

    function setFilter(filter) {
        setSelected(selected = filter)
    }

    return (
        <>
         <Toolbar 
            filters = {['All','Websites','Flayers','Business Cards']}
            selected = {selected}
            onSelectFilter = {(filter) => {
                setFilter(filter);
            }}
         />
            <div className="Projects">
                <ProjectList allProjects = {selected === 'All' ? allProjects : allProjects.filter((elem) => elem.category === selected)} />
            </div>
        </>
    )
}