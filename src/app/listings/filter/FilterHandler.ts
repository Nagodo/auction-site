import { FilterFieldType } from "@enums/FilterFieldType";

interface FilterValue {
    identifier: string;
    value: string;
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
        let doesIdentifierExist = this.FindByIdentifier(identifier);

        let formattedValue = value[0] + "-" + value[1];

     
        if (doesIdentifierExist) {
            doesIdentifierExist.value = formattedValue;
        } else {
            this.values.push({ identifier: identifier, value: formattedValue });
        }
    }

    FindByIdentifier(identifier: string) {
        return this.values.find(x => x.identifier == identifier);
    }
    
    GetFilterQuery() {

        let query = "";

        this.values.forEach((value, index) => {
            query += value.identifier + "=" + value.value;

            if (index < this.values.length - 1) {
                query += "&";
            }
        });

        return query;
    }

}