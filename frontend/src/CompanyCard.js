import React from 'react';
import { Link } from 'react-router-dom';

function CompanyCard({ name, description, logoUrl, handle }) {
    return (
        <Link to={`/companies/${handle}`}>
        <div className='CompanyCard'>
            <h3>{name}</h3>
            <img src={logoUrl} alt={name}/>
            <p>{description}</p>
        </div>
        </Link>
    )
}

export default CompanyCard;
