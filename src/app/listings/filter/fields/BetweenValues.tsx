"use client"

import { useState } from "react";
import { FaArrowsAltH } from "react-icons/fa";

interface BetweenValuesProps {
    min: number;
    max: number; 
    onChange: (values: number[]) => void;
}

const BetweenValues = ({min, max, onChange}: BetweenValuesProps) => {
    const [values, setValues] = useState<number[]>([min, max]);

    function handleMinChange(e: any) {

        let enteredValue = e.target.value;
        let finalValue = enteredValue;

        if (enteredValue === "") {
            finalValue = min;
        }

        setValues([enteredValue, values[1]]);
        onChange([finalValue, values[1]]);
    }

    function handleMaxChange(e: any) {
        let enteredValue = e.target.value;
        let finalValue = enteredValue;

        if (enteredValue === "") {
            finalValue = max;
        }

        setValues([values[0], enteredValue]);
        onChange([values[0], finalValue]);
    }

    return (
        <div className="between-values">
            <div className="input-field">
                <input key={1} type="number" placeholder="Min" onChange={handleMinChange}></input>

            </div>
            <FaArrowsAltH className="icon" />
            <div className="input-field">
                <input key={2} type="number" placeholder="Max" onChange={handleMaxChange}></input>
            </div>
        </div>
    )
}

export default BetweenValues;