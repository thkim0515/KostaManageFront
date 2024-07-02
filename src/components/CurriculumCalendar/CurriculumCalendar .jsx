import React, { useEffect, useState } from "react";
import axios from "axios";

const CurriculumCalendar = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    "#"
                );
                console.log(response.status);
                if (response.status === 200) {
                    console.log("회원 정보 전달 한다", response.data);
                    setData(response.data);
                }
            } catch (error) {
                console.error("에러 발생으로 정보 못 가져옴", error);
            }
        }
        getData();
    }, [])

    return (
        <>
            {data.map((Calendar) => {
                <div key={Calendar.calendar_id}>
                    {Calendar.user_id}
                    {Calendar.title}
                    {Calendar.description}
                    {Calendar.event_date}
                </div>
            })}
        </>
    );
}

export default CurriculumCalendar;