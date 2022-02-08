import React, {useEffect, useState} from "react";

interface Props {
    className?: string;
    level: any;
}

const BadgeLevelElement : React.ComponentType<Props> = (
    {
        className,
        level
    }) => {

    const [body, setBody] = useState<string>("");

    useEffect(() => {
        setBody(level.level);
    }, [level.level]);

    return (
        <div className={"badge " + className}>
            {body}
        </div>
    );
}

export default BadgeLevelElement;