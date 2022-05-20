import React, {useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from "axios";
import {AddressApi} from "../../config/CommonConst";
import interactionPlugin from "@fullcalendar/interaction"
import moment from "moment";
import ModalElement from "./ModalElement";
import AddTrekFeature from "../Feature/AddTrekFeature";

interface Props {
    idTrek: string;
}

const CalendarElement: React.ComponentType<Props> = ({
    idTrek
 }) => {

    const [datas, setDatas] = useState([]);
    const [formatDatas, setFormatDatas] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        getDatas();
    }, []);

    const handleDateClick = (event : any) => {
        console.log(idTrek);
        axios
            .post(AddressApi + "/api/books", {date: event.dateStr, trek: idTrek})
            .then(response => {
                setDatas(response.data);
            })
            .catch(error => setError("Vous devez vous connecter !"))
        ;
    };

    const getDatas = () => {
        axios
            .get(AddressApi + "/api/books")
            .then(response => {
                setDatas(response.data);
            })
            .catch(error => setError("Error"))
        ;
    };

    useEffect(() => {
        if(datas) {
            let tmpDatas : any = [];
            if(datas.length > 0) {
                datas.forEach((e:any) => {
                    tmpDatas = [
                        ...tmpDatas,
                        {
                            title: e?.trek?.name,
                            date: moment(e?.date).format('YYYY-MM-DD')
                        }
                    ];
                })
            }
            setFormatDatas(tmpDatas);
        }
    }, [datas]);

    return (
        <div className="calendar">
            { error &&
                <p className="text-error">{error}</p>
            }
            <FullCalendar
                plugins={[ dayGridPlugin, interactionPlugin ]}
                initialView="dayGridMonth"
                events={formatDatas}
                dateClick={handleDateClick}
            />
        </div>
    )
}

export default CalendarElement;