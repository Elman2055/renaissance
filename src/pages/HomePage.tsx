import ProductCard from "../components/ProductCard";
import { productCards } from "../constants/productCards";

const HomePage = () => {
  return (
    <>
      <section className="border-b border-stone-200 bg-[#f5f0e8]">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center md:py-12">
          <p className="mb-4 text-xs tracking-[0.4em] text-stone-900 uppercase">
            Добро пожаловать
          </p>
          <h1 className="mb-2 text-xl tracking-[0.3em] leading-tight font-semibold text-[#8b6914] md:text-3xl">
            Renaissance Parfume
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs tracking-[0.35em] text-stone-400 uppercase">
              Коллекция
            </p>
            <h2 className="text-3xl font-semibold text-stone-900">
              Наши ароматы
            </h2>
          </div>
        </div>

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
