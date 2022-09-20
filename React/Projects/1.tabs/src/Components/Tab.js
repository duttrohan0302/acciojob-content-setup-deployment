import React from "react";

const Tab = (props) => {

    const tabData = props.tabData;

    return (
        <div className="tab">
            <a href="#">{tabData}</a>
        </div>
    )
}

export default Tab;