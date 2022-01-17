import React, {useEffect, useState} from "react";

interface Props {
    className?: string;
    text: any;
}

const BadgeLevelElement : React.ComponentType<Props> = (
    {
        className,
        text
    }) => {

    const [body, setBody] = useState<string>("");

    useEffect(() => {
        if(text === "/api/levels/1") {
            setBody('Marcheur débutant')
        } else if(text === "/api/levels/2") {
            setBody('Marcheur occasional')
        } else if(text === "/api/levels/3") {
            setBody('Marcheur confirmé')
        } else if(text === "/api/levels/4") {
            setBody('Trek sportif')
        }
    }, [text]);

    return (
        <div className={"badge " + className}>
            {body}
        </div>
    );
}

export default BadgeLevelElement;