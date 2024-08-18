import { FilterFieldType } from "@enums/FilterFieldType";
import BetweenValues from "./fields/BetweenValues";

interface FilterElementProps {
    title: string;
    identifier: string;
    type: FilterFieldType;
    onChange: (type: FilterFieldType, value: any, identifier: string) => void;
}

const FilterElement = ({ title, identifier, type, onChange }: FilterElementProps) => {
    return (
        <div className="element">
            <p className="title">{title}</p>
            <div className="filter-element-content">
                {type === FilterFieldType.BetweenValues && (
                    <BetweenValues min={0} max={100} onChange={(value) => onChange(type, value, identifier)} />
                )}
            </div>
        </div>
    ) 
}

export default FilterElement;