import React from 'react';

function EventSearch() {
    return (
        <>
            <div className="search-widget mb-50">
                <div className="search-wrap">
                    <input type="search" placeholder="Searching..." name="s"
                           className="search-input"/>
                    <button type="submit" value="Search"><i className="flaticon-search"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default EventSearch;
