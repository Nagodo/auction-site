"use client"

import { useState } from "react";

interface TwoSliderInputProps {
    id: string;
    label: string;
}

const TwoSliderInput = ({id, label}: TwoSliderInputProps) => {
    const [selected, setSelected] = useState(0);

    function handleFirstOptionClicked() {
        setSelected(0);
    }

    function handleSecondOptionClicked() {
        setSelected(1);
    }

    return (
        <div className="two-slider-input">
            <p className="title">{label}</p>
            <div className="input-container">

                <div className="selected-indicator">
                    <div className={"selected " + (selected === 0 ? "left" : "right")}>

                    </div>
                </div>

                <div className="options">
                    <div className="option" onClick={handleFirstOptionClicked}>
                        <p className={selected === 0 ? "active" : ""}>Køb nu</p>
                    </div>

                    <div className="option" onClick={handleSecondOptionClicked}>
                        <p className={selected === 1 ? "active" : ""}>Auktion</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default TwoSliderInput;