export function FormatPrice(price: number): string {
    return price.toLocaleString("da-DK", {
        style: "currency",
        currency: "DKK",
        minimumFractionDigits: 0,
    });
}