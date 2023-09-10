import React from 'react';

function Map({map}) {
    return (
        <div className="map-canvas pt-120 md-pt-80" dangerouslySetInnerHTML={{__html: map}}/>
    );
}

export default Map;
