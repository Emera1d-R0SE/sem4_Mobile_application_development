export type Product = {
  id: string;
  title: string;
  price: string;
  isHero: boolean;
};

export type RootStackParamList = {
  Feed: undefined;
  ProductDetail: { product: Product };
};
