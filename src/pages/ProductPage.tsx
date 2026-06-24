import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";
import VolumeSelector from "../components/VolumeSelector";
import { productCards } from "../constants/productCards";
import { formatPrice } from "../utils/formatPrice";

const ProductPage = () => {
  const { id } = useParams();
  const product = productCards.find((item) => item.id === Number(id));

  const [selectedVolume, setSelectedVolume] = useState<string>("5ml");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="mb-4 text-3xl font-semibold text-stone-900">
          Аромат не найден
        </h1>
        <Link
          to="/"
          className="text-sm tracking-widest text-[#8b6914] uppercase hover:underline"
        >
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-8 md:py-12">
      <Link
        to="/"
        className="mb-10 inline-flex items-center gap-2 text-sm tracking-widest text-stone-500 uppercase transition-colors hover:text-stone-900"
      >
        ← Каталог
      </Link>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <div className="overflow-hidden rounded-sm border border-stone-200 bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-xs tracking-[0.35em] text-[#8b6914] uppercase">
            Renaissance Parfume
          </p>
          <h1 className="mb-4 text-3xl leading-tight font-semibold text-stone-900 md:text-4xl">
            {product.name}
          </h1>
          <div className="mb-4">
            <VolumeSelector
              volumes={product.volumes}
              selected={selectedVolume}
              onChange={setSelectedVolume}
            />
          </div>
          <p className="mb-6 text-2xl font-semibold tracking-wide text-stone-900">
            {formatPrice(product.volumes[selectedVolume])}
          </p>
          <AddToCartButton
            productId={product.id}
            volume={selectedVolume}
            price={product.volumes[selectedVolume]}
            className="mb-8"
          />

          <dl className="space-y-3 text-sm">
            <div className="flex flex-col gap-1 border-b border-stone-100 pb-3 sm:flex-row sm:gap-4">
              <p className="shrink-0 font-medium text-black sm:w-28">
                Верхние ноты:
                <span className="text-[#8b6914]">{` ${product.upper}`}</span>
              </p>
            </div>
            <div className="flex flex-col gap-1 border-b border-stone-100 pb-3 sm:flex-row sm:gap-4">
              <p className="shrink-0 font-medium text-black sm:w-28">
                Средние ноты:
                <span className="text-[#8b6914]">{` ${product.medium}`}</span>
              </p>
            </div>
            <div className="flex flex-col gap-1 border-b border-stone-100 pb-3 sm:flex-row sm:gap-4">
              <p className="shrink-0 font-medium text-black sm:w-28">
                Базовые ноты:
                <span className="text-[#8b6914]">{` ${product.basic}`}</span>
              </p>
            </div>
          </dl>
          <div className="flex flex-wrap gap-3 pt-1 pb-8">
            <span className="rounded-sm border border-stone-200 bg-stone-50 px-3 py-1.5 text-sm text-[#8b6914]">
              <span className="text-black">Стойкость:</span>{" "}
              {product.durability}
            </span>
            <span className="rounded-sm border border-stone-200 bg-stone-50 px-3 py-1.5 text-sm text-[#8b6914]">
              <span className="text-black">Шлейф:</span> {product.trail}
            </span>
          </div>
          <p className="mb-10 text-base leading-relaxed text-stone-600">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
