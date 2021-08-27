import React from 'react';
import { useParams } from 'react-router-dom';
import CompanyDetails from '/CompanyDetails';

function FilterCompanyDetails({companies}) {
    const {name} = useParams();

    if (name) {
        const currentCompany = companies.find(
            company => company.handle.toLowerCase() === name.toLowerCase()
        );
        return <CompanyDetails company={currentCompany} />;
    }
    return null;
}

export default FilterCompanyDetails;