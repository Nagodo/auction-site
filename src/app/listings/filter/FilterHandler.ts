import { FilterFieldType } from "@enums/FilterFieldType";

interface FilterValue {
    identifier: string;
    value: string;
    shouldInclude: boolean;
}

export class FilterHandler {
    values: FilterValue[] = [];

    HandleValueChange(type: FilterFieldType, value: any, identifier: string) {
        switch (type) {
            case FilterFieldType.BetweenValues:
                this.HandleBetweenValues(value, identifier);
                break;
        }

    }

    HandleBetweenValues(value: any, identifier: string) {
        let CurrentValue = this.FindByIdentifier(identifier);

        let shouldInclude = true;
        
        let formattedValue = value[0] + "-" + value[1];
     
        if (CurrentValue) {
            CurrentValue.value = formattedValue;
            CurrentValue.shouldInclude = shouldInclude
        } else {
            this.values.push({ identifier: identifier, value: formattedValue, shouldInclude: shouldInclude });
        }
    }

    FindByIdentifier(identifier: string) {
        return this.values.find(x => x.identifier == identifier);
    }
    
    GetFilterQuery() {

        let query = "";

        this.values.forEach((value, index) => {
            if (!value.shouldInclude) {
                return;
            }
            query += value.identifier + "=" + value.value;

            if (index < this.values.length - 1) {
                query += "&";
            }
        });

        return query;
    }

}