import React, {useEffect, useState} from "react";

interface Props {
    className?: string;
    hours: number;
}

const ViewHourlyAbstract: React.ComponentType<Props> = ({
    className,
    hours
}) => {

    const [hoursFormat, setHoursFormat] = useState<string>('');

    useEffect(() => {
        if(hours) {
            const tmpHour = (hours.toString()).split('.');

            if(tmpHour[1]) {
                let tmpMinute = tmpHour[1]
                if(tmpHour[1][1]) {
                    setHoursFormat(tmpHour[0] + 'h' + tmpMinute);
                } else {
                    setHoursFormat(tmpHour[0] + 'h' + tmpMinute + 0);
                }

            } else {
                setHoursFormat(tmpHour[0] + 'h');
            }
        }
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