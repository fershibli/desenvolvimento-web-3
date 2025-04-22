import { BrandModel } from "../models/brand.models";

export const listAll = async () => {
    const brands = await BrandModel.findAll();
    return brands;
}