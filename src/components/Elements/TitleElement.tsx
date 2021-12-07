import React from "react";

interface Props {
    title: string;
    className: string;
}

const TitleElement: React.ComponentType<Props> = (
    {
        title,
        className
    }) => {

    return (
        <div className={"title " + className}>
            <div>{title}</div>
        </div>
    );
}

export default TitleElement;