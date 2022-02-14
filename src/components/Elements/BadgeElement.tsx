import React, {useEffect, useState} from "react";

interface Props {
    className?: string;
    level: any;
}

const BadgeLevelElement : React.ComponentType<Props> = (
    {
        className= 'badge',
        level
    }) => {

    const [body, setBody] = useState<string>("");

    useEffect(() => {
        if(level?.level) {
            setBody(level?.level);
        }
    }, [level]);

    return (
        <div className={"color-black first-letter-capitalize " + className}>
            {body}
        </div>
    );
}

export default BadgeLevelElement;