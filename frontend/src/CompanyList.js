import React from 'react';
import { Link } from 'react-router-dom';
import CompanyCard from './CompanyCard';

import SearchForm from './SearchForm';

function CompanyList({companies}) {
    return (
        <div>
            <SearchForm />
            <div>
                {companies.map(c => (
                    <div>
                        <Link to={`/companies/${c.handle.toLowerCase()}`}>
                            <CompanyCard company={c} />
                        </Link>
                    </div>
            ))}
        </div>
    </div>
    )
}

export default CompanyList;