import { Link, useParams } from "react-router-dom";
import { productCards } from "../constants/productCards";
import { formatPrice } from "../utils/formatPrice";
import { useEffect } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const product = productCards.find((item) => item.id === Number(id));

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
        <div className="overflow-hidden rounded-sm border border-stone-200 bg-stone-100">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-xs tracking-[0.35em] text-[#8b6914] uppercase">
            Renaissance Parfume
          </p>
          <h1 className="mb-4 text-3xl leading-tight font-semibold text-stone-900 md:text-4xl">
            {product.name}
          </h1>
          <p className="text-base mb-2 text-stone-500">100ml</p>
          <p className="mb-8 text-2xl font-semibold tracking-wide text-stone-900">
            {formatPrice(product.price)}
          </p>
          <p className="mb-10 text-base leading-relaxed text-stone-600">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
