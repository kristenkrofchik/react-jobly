import React, { useState, useEffect } from 'react';
import JoblyApi from './api';
import CompanyCard from './CompanyCard';

import SearchForm from './SearchForm';

function CompanyList() {
    const [companies, setCompanies] = useState(null);
    
    useEffect(function getCompaniesList() {
        searchBar();
    }, []);

    async function searchBar(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    } 

    return (
        <div>
            <SearchForm searchFor={searchBar} />
            <div>
                {companies.map(c => (
                    <CompanyCard key={c.handle} handle={c.handle} name={c.name} description={c.description} logoUrl={c.logoUrl} />
            ))}
            </div>
    </div>
    )
}

export default CompanyList;