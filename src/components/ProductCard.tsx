import { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { formatPrice } from "../utils/formatPrice";
import VolumeSelector from "./VolumeSelector";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedVolume, setSelectedVolume] = useState<string>("5ml");

  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-sm border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg leading-snug font-semibold text-stone-900">
          {product.name}
        </h3>
        <p className="text-base font-semibold tracking-wide text-[#8b6914]">
          {formatPrice(product.volumes[selectedVolume])}
        </p>
        <VolumeSelector
          volumes={product.volumes}
          selected={selectedVolume}
          onChange={setSelectedVolume}
        />
        <span className="mt-2 inline-flex w-fit items-center gap-2 border border-[#8b6914] px-2 sm:px-5 py-2 text-sm font-medium tracking-wider text-[#8b6914] uppercase transition-all duration-300 group-hover:bg-[#8b6914] group-hover:text-white">
          Подробнее
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
