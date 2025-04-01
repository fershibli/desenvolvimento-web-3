export interface IProduct {
    id: number;
    name: string;
    brand: string;
    barCode: string;
    supplier: string;
    stockId: number;
    price: number;
    weight: number;
    measureUnit: string;
}

export interface IProductFilterOptions {
    name: string;
    brand: string;
    supplier: string;
    stockId: number;
}