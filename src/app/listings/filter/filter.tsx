"use client";

import { FilterFieldType } from "@enums/FilterFieldType";
import FilterElement from "./filter-element";
import "./filter.scss";
import { FilterHandler } from "./FilterHandler";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Filter = () => {
    const router = useRouter();

    const filterHandler = useRef<FilterHandler>(new FilterHandler());

    function handleFilterChange(type: FilterFieldType, value: any, identifier: string) {
        filterHandler.current.HandleValueChange(type, value, identifier);
    
    }
    
    function handleApplyFilterClicked() {
        let filter = filterHandler.current.GetFilterQuery();
        console.log(filter);
        router.push("/listings?" + filter);
    }

    return (
        <div className='filter'>
            <div className="wrapper">
                <div className="content">
                    <div className="actions">
                        <div className="action">
            
                        </div>

                        <div className="action" onClick={handleApplyFilterClicked}>
                            <p className="text">Apply</p>
                        </div>
                    </div>
                    <div className="basic">
                        <FilterElement title="Price" identifier="price" type = {FilterFieldType.BetweenValues} onChange={handleFilterChange} />
                        <FilterElement title="Price" identifier="price2" type = {FilterFieldType.BetweenValues} onChange={handleFilterChange}/>
                          
              
                    </div>

                    <div className="specific">
                        {/* <FilterElement title="Price" type = {FilterFieldType.BetweenValues} />
                          */}
                    </div>

                </div>
            </div>
		</div>
    )
}

export default Filter;