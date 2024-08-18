"use client";

import { FilterFieldType } from "@enums/FilterFieldType";
import FilterElement from "./filter-element";
import "./filter.scss";
import { FilterData } from "./FilterData";
import { useState } from "react";

const Filter = () => {

    const [filterData, setFilterData] = useState<FilterData>(new FilterData());

    return (
        <div className='filter'>
            <div className="wrapper">
                <div className="content">
                    <div className="basic">
                        <FilterElement title="Price" type = {FilterFieldType.BetweenValues} />
                        <FilterElement title="Price" type = {FilterFieldType.BetweenValues} />
                          
              
                    </div>

                    <div className="specific">
                        <FilterElement title="Price" type = {FilterFieldType.BetweenValues} />
                         
                    </div>

                </div>
            </div>
		</div>
    )
}

export default Filter;