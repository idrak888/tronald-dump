import React from 'react';

const Search = props => {
    return (
        <div className="Search">
            <h3>Search results for {props.searchKey}:</h3>
            {props.results.map((result, index) => {
                return <p key={index}><strong>{index}.</strong>{result.value}</p>
            })}
        </div>  
    );
}   

export default Search;