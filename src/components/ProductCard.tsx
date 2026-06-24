import { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { formatPrice } from "../utils/formatPrice";
import AddToCartButton from "./AddToCartButton";
import VolumeSelector from "./VolumeSelector";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedVolume, setSelectedVolume] = useState<string>("5ml");

  return (
    <div className="group flex flex-col overflow-hidden rounded-sm border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link
        to={`/product/${product.id}`}
        className="aspect-square overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg leading-snug font-semibold text-stone-900 transition-colors hover:text-[#8b6914]">
            {product.name}
          </h3>
        </Link>
        <p className="text-base font-semibold tracking-wide text-[#8b6914]">
          {formatPrice(product.volumes[selectedVolume])}
        </p>
        <VolumeSelector
          volumes={product.volumes}
          selected={selectedVolume}
          onChange={setSelectedVolume}
        />
        <AddToCartButton
          productId={product.id}
          volume={selectedVolume}
          price={product.volumes[selectedVolume]}
          className="mt-2"
        />
      </div>
    </div>
  );
};

export default ProductCard;
