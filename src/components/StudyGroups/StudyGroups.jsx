import React, { useEffect } from "react";
import axios from "axios";

const StudyGroups = () => {

    useEffect(() => {
        const getData = async () => {
            try {
                const respone = await axios.get(
                    "#"
                );
                console.log(respone.status);
                if (respone.status === 200) {
                    console.log("회원 정보 전달 한다", respone.data);
                }
            } catch (error) {
                console.error("에러 발생으로 정보 못 가져옴", error);
            }
        }
        getData();
    }, [])
    
    return (
        <>
            {getDate.map((group) => {
                <div key={group.group_id}>
                    {group.cohort_id}
                    {group.title}
                    {group.descriptionTEXT}
                    {group.creation_date}
                </div>
            })}
        </>
    );
}

export default StudyGroups;