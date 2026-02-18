import { Product } from "../../features/home/domain/Product";



export type RootStackParamList = {
  Product: undefined;
  "Product Detail": { item: Product };
};