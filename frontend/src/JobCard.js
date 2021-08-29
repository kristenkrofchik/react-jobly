import React, { useState, useContext, useEffect } from 'react';
import UserContext from '/UserContext';

function JobCard({id, title, salary, equity, companyHandle}) {

    const [hasAppliedToJob, applyToJob] = useContext(UserContext);
    const [applied, setApplied] = useState();

    useEffect(function updateApplied() {
        setApplied(hasAppliedToJob(id));
    }, [id, hasAppliedToJob]);

    async function handleApply(evt) {
        evt.preventDefault();
        if(hasAppliedToJob(id)) return;
        applyToJob(id);
        setApplied(true);
    }
 
    return (
        <div className='JobCard'>
            <h2>{title}</h2>
            <h4>{companyHandle}</h4>
            <h5>Salary: {salary}</h5>
            <h5>Equity: {equity}</h5>
            <button onClick={handleApply} disabled={applied}>
                {applied ? "Applied" : "Apply"}
            </button>
        </div>
    )
}

export default JobCard;