import React, { useState} from 'react';

function SearchForm({searchFor}) {
    const [searchTerm, setSearchTerm] = useState(null);

    function handleSumbit(evt) {
        evt.preventDefault();
        searchFor(searchTerm.trim());
        setSearchTerm(searchTerm.trim());
    }

    function handleChange(evt) {
        setSearchTerm(evt.target.value);
    }

    return (
        <form onSubmit={handleSumbit}>
            <input name='searchTerm' value={searchTerm} placeholder='Enter search term...' onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>
    )

}

export default SearchForm;