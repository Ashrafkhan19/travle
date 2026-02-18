import { apiClient } from "../../../core/network/apiClient";
import { Product } from "../domain/Product";


export const productRepository = {
    async getProducts(): Promise<Product[]> {
        const response = await apiClient.get("/products");
        const data = response.data

        return data.map((item: any) => ({
            id: item.id.toString(),
            title: item.title,
            price: item.price,
            image: item.image,
            description: item.description,
        }));
    },
};
