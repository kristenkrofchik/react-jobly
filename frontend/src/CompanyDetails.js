import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobCardList from './JobCardList';
import JoblyApi from './api';

function CompanyDetails() {
    const { handle } = useParams();

    const [company, setCompany] = useState(null);

    useEffect(function getCompanyJobs() {
        async function getCompany() {
            setCompany(await JoblyApi.getCompany(handle))
        }
        getCompany();
    }, [handle]);

    return (
        <div className='CompanyDetails'>
            <h3>{company.name}</h3>
            <p>{company.description}</p>
            <JobCardList jobs={company.jobs} />
        </div>
    )
}

export default CompanyDetails;
