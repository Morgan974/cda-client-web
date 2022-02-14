import React, {useEffect, useState} from "react";

interface Props {
    className?: string;
    hours: string;
}

const ViewHourlyAbstract: React.ComponentType<Props> = ({
    className,
    hours
}) => {

    const [hoursFormat, setHoursFormat] = useState<string>('');

    useEffect(() => {
        const tmpHour = hours.split('.');

        setHoursFormat(tmpHour[0] + 'h' + (tmpHour[1] ? tmpHour[1] : ''));
    }, [hours]);
    /*******************************************************************************************************************
     *                                          RENDER
     ******************************************************************************************************************/

    return (
        <>
            {hoursFormat}
        </>
    )
};

export default ViewHourlyAbstract;