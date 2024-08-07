import { ListingType } from "@enums/ListingType";

export interface IListing {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    type: ListingType;
}