import { productsData } from "@/mocks/products.ts";
import type { ProductCategory } from "@/models/Product.model";

export const productService = {
  async fetchByCategory(category: string): Promise<ProductCategory> {
    // Simule un délai de chargement de 500ms
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = productsData[category];
        if (data) resolve(data);
        else reject(new Error("Catégorie non trouvée"));
      }, 500);
    });
  },
};
