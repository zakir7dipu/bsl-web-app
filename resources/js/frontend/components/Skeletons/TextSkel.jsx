import React from 'react';
import Skeleton from "react-loading-skeleton";

function TextSkel({count, lineHeight, height, width, baseColor, highlightColor}) {
    return (
        <Skeleton
            count={count}
            lineHeight={lineHeight}
            height={height}
            width={width}
            baseColor={!baseColor?"#66000000":baseColor}
            highlightColor={!highlightColor?"#202020":highlightColor}
        />
    );
}

export default TextSkel;
