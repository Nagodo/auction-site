import { FilterFieldType } from "@enums/FilterFieldType";

interface FilterElementProps {
    title: string;
    type: FilterFieldType;
    onChange: (type: FilterFieldType, value: any, identifier: string) => void;
}

const FilterElement = ({ title, type, onChange }: FilterElementProps) => {
    return (
        <div className="element">
            <p className="title">{title}</p>
            <div className="filter-element-content">
                
            </div>
        </div>
    )
}

export default FilterElement;