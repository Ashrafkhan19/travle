import { Item } from "../home/domain/item";


export type RootStackParamList = {
  Home: undefined;
  Detail: { item: Item };
};