import React, { useState, useEffect } from 'react';
import JoblyApi from './api';
import JobCard from './JobCard';

import SearchForm from './SearchForm';

function JobList() {
    const [jobs, setJobs] = useState(null);

    useEffect(function getJobsList() {
        searchBarName();
    }, []);

    async function searchBarName(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    } 

    return (
        <div>
            <SearchForm searchFor={searchBarName} />
            <div>
                {jobs.map(j => (
                    <JobCard key={j.id} title={j.title} salary={j.salary} equity={j.equity} companyHandle={j.companyHandle} />
                ))}
            </div>
        </div>
    )

}

export default JobList;