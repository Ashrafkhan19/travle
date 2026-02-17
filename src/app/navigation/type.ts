import { Product } from "../../features/home/domain/Product";



export type RootStackParamList = {
  Home: undefined;
  Detail: { item: Product };
};