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
        if(text === "/api/levels/f6553fb4-83cb-42ba-9828-2fc37ca16649") {
            setBody('Marcheur débutant')
        } else if(text === "/api/levels/0c6ed5f9-d7c2-4681-9082-899fd273ec1b") {
            setBody('Marcheur occasional')
        } else if(text === "/api/levels/441231f2-6f27-4802-97b7-e23e6404fcce") {
            setBody('Marcheur confirmé')
        } else if(text === "/api/levels/e3cf3b18-fd67-46a1-9341-1e24082a8b21") {
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