import React, { useLayoutEffect, useEffect, useRef } from 'react';

const LayoutEffectTutorial = () => {

    const inputRef = useRef(null);


    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, []);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);


    return (
        <div>
            <input ref={inputRef} value="PEDRO" style={{width: 400, height: 20}} />
        </div>
    );

};

export default LayoutEffectTutorial;