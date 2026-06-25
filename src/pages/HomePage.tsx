import ProductCard from "../components/ProductCard";
import { productCards } from "../constants/productCards";

const HomePage = () => {
  return (
    <>
      <section className="border-b border-stone-200 bg-[#f5f0e8]">
        <div className="mx-auto max-w-6xl px-6 py-4 text-center md:py-16">
          <span className="mb-3 block text-xs uppercase tracking-[0.4em] text-stone-500">
            Renaissance Parfum
          </span>

          <h1 className="mx-auto max-w-4xl text-xl font-semibold leading-tight tracking-[0.12em] text-[#8b6914] md:text-5xl">
            Оригинальная и нишевая парфюмерия
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 md:text-lg">
            Доставка в любую страну мира
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-8">
        <p className="tracking-[0.3em] text-[#8b6914] uppercase">Каталог</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productCards.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
