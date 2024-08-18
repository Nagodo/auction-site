import { FilterFieldType } from "@enums/FilterFieldType";

export class FilterData {
    price: { min: number; max: number; };


    constructor() {
        this.price = {min: 0, max: 0};
    }

    HandleValueChange(type: FilterFieldType, value: any) {

    }
    

}