import { useEffect } from "react";
import { Link } from "react-router-dom";
import { productCards } from "../constants/productCards";
import {
  selectTotalPrice,
  useCartStore,
} from "../store/cartStore";
import { buildWhatsAppOrderUrl } from "../utils/buildWhatsAppOrderUrl";
import { formatPrice } from "../utils/formatPrice";

const CartPage = () => {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const totalPrice = useCartStore(selectTotalPrice);
  const whatsAppOrderUrl = buildWhatsAppOrderUrl(items, productCards);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="mb-4 text-3xl font-semibold text-stone-900">Корзина</h1>
        <p className="mb-8 text-stone-500">Корзина пуста</p>
        <Link
          to="/"
          className="text-sm tracking-widest text-[#8b6914] uppercase hover:underline"
        >
          Перейти в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-8 md:py-12">
      <h1 className="mb-10 text-3xl font-semibold text-stone-900">Корзина</h1>

      <ul className="divide-y divide-stone-200 border-y border-stone-200">
        {items.map((item) => {
          const product = productCards.find((p) => p.id === item.productId);

          if (!product) return null;

          return (
            <li
              key={`${item.productId}-${item.volume}`}
              className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center"
            >
              <Link
                to={`/product/${product.id}`}
                className="shrink-0 overflow-hidden rounded-sm border border-stone-200 bg-white"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                />
              </Link>

              <div className="min-w-0 flex-1">
                <Link
                  to={`/product/${product.id}`}
                  className="text-lg font-semibold text-stone-900 transition-colors hover:text-[#8b6914]"
                >
                  {product.name}
                </Link>
                <p className="mt-1 text-sm text-stone-500">{item.volume}</p>
                <p className="mt-2 font-semibold text-[#8b6914]">
                  {formatPrice(item.price)}
                </p>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(
                        item.productId,
                        item.volume,
                        item.quantity - 1,
                      )
                    }
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm border border-stone-300 text-stone-600 transition-colors hover:border-[#8b6914] hover:text-[#8b6914]"
                    aria-label="Уменьшить количество"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm font-medium">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(
                        item.productId,
                        item.volume,
                        item.quantity + 1,
                      )
                    }
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm border border-stone-300 text-stone-600 transition-colors hover:border-[#8b6914] hover:text-[#8b6914]"
                    aria-label="Увеличить количество"
                  >
                    +
                  </button>
                </div>

                <p className="min-w-24 text-right font-semibold text-stone-900">
                  {formatPrice(item.price * item.quantity)}
                </p>

                <button
                  type="button"
                  onClick={() => removeItem(item.productId, item.volume)}
                  className="cursor-pointer text-sm tracking-wider text-stone-400 uppercase transition-colors hover:text-stone-900"
                  aria-label="Удалить товар"
                >
                  Удалить
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex flex-col items-end gap-4">
        <p className="text-xl font-semibold text-stone-900">
          Итого:{" "}
          <span className="text-[#8b6914]">{formatPrice(totalPrice)}</span>
        </p>
        <a
          href={whatsAppOrderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex cursor-pointer items-center gap-2 border border-[#8b6914] bg-[#8b6914] px-6 py-3 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 hover:bg-[#6d5210]"
        >
          Оформить заказ
        </a>
        <Link
          to="/"
          className="text-sm tracking-widest text-stone-500 uppercase transition-colors hover:text-stone-900"
        >
          ← Продолжить покупки
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
