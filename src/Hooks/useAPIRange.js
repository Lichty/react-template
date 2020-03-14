import React, {useState, useEffect} from 'react';

function useAPIRange(api, arr) {
    const [data, setData] = useState([]);

    useEffect(() => {
        let promiseArray = [];
        arr.forEach(element => {
            promiseArray.push(fetch(`${api}/${element}/`)
            .then(res => res.json())
            .then(data => (data.name))); 
        });
        Promise.all(promiseArray).then(values => setData(values.map(val => (<p>{val}</p>))));
    },[]);

    return [data, data !== []];
}

export default useAPIRange;