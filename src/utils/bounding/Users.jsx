import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
    const [testVal, setTestVal] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    "http://192.168.0.5:8080/users/get/1"
                );
                setTestVal(response.data)
                console.log(response);

            } catch (error) {
                console.error("err", error);
            }
        }
        getData();
    }, [])

    console.log(testVal);
    return (
        <>
            {testVal.map((user) => (
                console.log(user)
            ))}
        </>
    );
}

export default Users;