"use client"

import { useState } from "react";

interface BetweenValuesProps {
    min: number;
    max: number; 
    onChange: (values: number[]) => void;
}

const BetweenValues = ({min, max, onChange}: BetweenValuesProps) => {
    const [values, setValues] = useState<number[]>([min, max]);

    function handleMinChange(e: any) {
        let newValue = [e.target.value, values[1]];
        setValues(newValue);
        onChange(newValue);
    }

    function handleMaxChange(e: any) {
        let newValue = [values[0], e.target.value];
        setValues(newValue);
        onChange(newValue);
    }

    return (
        <div className="between-values">
            <input type="number" placeholder="Min" onChange={handleMinChange}></input>
            <input type="number" placeholder="Max" onChange={handleMaxChange}></input>
        </div>
    )
}

export default BetweenValues;