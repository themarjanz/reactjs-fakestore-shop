import React, { useState } from "react";
const Test = (props) => {
    // const { count } = props;
    // console.log(count);

    const [count, setCount] = useState(0);
    const plus = () => {
        // const newCount = count + 1;
        // setCount(newCount);

        setCount(count + 1);
    };
    const minus = () => {
        // const newCount = count - 1;
        // setCount(newCount);
    };
    console.log(count);
    return (
        <div className="count mt-5">
            <h1>{count}</h1>
            <button onClick={plus} className="ms-3 p-3" >+</button>
            <button onClick={() => setCount(count - 1)} className="ms-3 p-3" >-</button>

        </div>
    );
};

export default Test;