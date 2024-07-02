import React from 'react';


const BoardPage = (data) => {


    return (
        <>
        <div>
            {data.type}
        </div>
            <div>
                {data.title}
                {data.user_id}
            </div>
            <div>
                {data.post_date}
            </div>
            <div>
                {data.content}
            </div>
            <div>
                {data.cohort_id}
            </div>
        </>
    );
};


export default BoardPage;