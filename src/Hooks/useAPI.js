import React, {useState, useEffect} from 'react';

function useAPI(url, loading = 'Loading...') {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(val => setData(val));
    },[]);

    return data === undefined ? loading : data.name;
}

export default useAPI;