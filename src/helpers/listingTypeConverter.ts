import { ListingType } from "@/enums/ListingType";

export function ConvertListingType(type: string): ListingType {
    if (type === "Sale") {
        return ListingType.Sale;
    } else if (type === "Auction") {
        return ListingType.Auction;
    }

    return ListingType.Sale;
}