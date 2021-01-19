import React from "react";
import './SidebarOption.css';

// receive text and Icon from prop. Icon is a component.
function SidebarOption( { active, text, Icon}) {
    return(
        <div className = {`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon />
            <h2>{text}</h2>


        </div>
    );
}

export default SidebarOption;