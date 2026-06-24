export type Product = {
  id: number;
  image: string;
  name: string;
  upper: string;
  medium: string;
  basic: string;
  durability: string;
  trail: string;
  description: string;
  volumes: Record<string, number>;
};
