import React from "react";
import Tab from "./Tab";

function Tabs(props){

    const tabsLocal = props.myTabs;

    return(
        <div className="tabs">
            {
                tabsLocal.map((tabName,index)=>(
                    <Tab key={index} tabData={tabName} />
                ))
            }
        </div>
    )
}

export default Tabs;