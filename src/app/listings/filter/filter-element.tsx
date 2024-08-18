import { FilterFieldType } from "@enums/FilterFieldType";

interface FilterElementProps {
    title: string;
    type: FilterFieldType;
}

const FilterElement = ({ title, type }: FilterElementProps) => {
    return (
        <div className="element">
            <p className="title">{title}</p>
            <div className="filter-element-content">
                
            </div>
        </div>
    )
}

export default FilterElement;