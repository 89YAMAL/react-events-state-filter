import React from "react";

export default function Toolbar({ filters, selected, onSelectFilter}) {
    return (
        <div>
            <ul className="Toolbar">
                {filters.map((item) => {
                    return (
                        <li 
                        onClick = {() => onSelectFilter(item)} 
                        key = {item} 
                        className = {item === selected ? "selected" : null}
                        >
                            {item}
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}