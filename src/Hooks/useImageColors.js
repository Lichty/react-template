import React, {useState, useEffect} from 'react';


function useImageColors(background) {

    const [palette, setPalette] = useState();



    return {palette};
}

export default useImageColors;