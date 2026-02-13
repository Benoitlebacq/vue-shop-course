type Size = "unique" | "s" | "m" | "l" | "xl" | "2xl";

type Stock = Partial<Record<Size, number>>;

export type ProductVariant = {
  id: number;
  name: string;
  color: string;
  colorName: string;
  image: string;
  price: number;
  stock: Stock;
};

export type ProductCategory = {
  title: string;
  variants: ProductVariant[];
};
