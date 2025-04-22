import { Brand } from "../interfaces/brand.interface";
import { BrandModel } from "../models/brand.models";

export const listAll = async (): Promise<Brand[]> => {
    const brands = await BrandModel.findAll();
    return brands;
}