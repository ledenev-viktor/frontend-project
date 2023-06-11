import { useState } from "react";
import classes from './main.module.scss';

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => setCounter((prev) => prev + 1);
    return (
        <div className={classes.root}>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )

}