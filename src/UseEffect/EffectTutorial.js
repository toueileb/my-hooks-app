import React, { useEffect, useState } from 'react';
import axios from 'axios';


const EffectTutorial = () => {
    const [data, setDate] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setDate(response.data[0].email);
                console.log('API WAS CALLED');

            })
    }, [count]);

    return (
        <div>
            Hello World
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>
                Click
            </button>

        </div>
    );
}

export default EffectTutorial;