import React from 'react';
import Picture from './Picture';
import NoResults from './NoResults';


const SearchResults = (props) => {
        // {/* display seach results here
        // if no search results available, 
        // display an error message */}
    const results = props.data;
    let pics;
        if (results.length > 0) {
            pics = results.map(pic => <Picture url={pic.images} key={pic.id} /> );
        } else {
            pics = <NoResults />
            }


    return(
        <div className="photo-container">
            <h2>Query</h2>
                <ul>
                    hello
                </ul>
        </div>
        );
    }

export default SearchResults;