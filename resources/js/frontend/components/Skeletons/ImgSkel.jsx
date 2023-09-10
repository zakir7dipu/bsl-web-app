import React from 'react';
import Skeleton from "react-loading-skeleton";

function ImgSkel({width, height, baseColor, highlightColor}) {
    return (
        <Skeleton
            width={width}
            height={height}
            baseColor={!baseColor?"#66000000":baseColor}
            highlightColor={!highlightColor?"#202020":highlightColor}
        />
    );
}
            // {/*"#03228f"*/}
            // {/*"#0c64d4ff"*/}

export default ImgSkel;
