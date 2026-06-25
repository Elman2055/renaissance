import { Link } from "react-router-dom";
import { RiShoppingBagLine } from "react-icons/ri";
import { useCartStore, selectTotalItems } from "../../../store/cartStore";

type CartLinkProps = {
  showAddedNotice: boolean;
  closeMenu: () => void;
};

const CartLink = ({ showAddedNotice, closeMenu }: CartLinkProps) => {
  const totalItems = useCartStore(selectTotalItems);

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-6 right-5 lg:bottom-10 lg:right-10 z-50 flex items-center">
      {showAddedNotice && (
        <span
          className="cart-added-notice pointer-events-none absolute bottom-1 right-20 mb-3 whitespace-nowrap rounded-md border bg-[#312f2d] px-3 py-2 text-sm text-white shadow-lg after:absolute after:left-6 after:top-full after:border-x-transparent after:border-t-[#312f2d] after:content-['']"
          role="status"
          aria-live="polite"
        >
          Товар добавлен в корзину
        </span>
      )}

      <Link
        to="/cart"
        onClick={closeMenu}
        className="relative flex h-18 w-18 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)] transition-all duration-300 active:scale-95"
        aria-label={`Корзина, ${totalItems} товаров`}
      >
        <RiShoppingBagLine
          className={`text-4xl text-[#8b6914] ${
            showAddedNotice ? "cart-icon-pop" : ""
          }`}
        />

        <span
          className="
            absolute -top-1 -right-1
            flex h-6 min-w-6 items-center justify-center
            rounded-full bg-red-600 px-1
            text-xs font-bold text-white shadow
          "
        >
          {totalItems}
        </span>
      </Link>
    </div>
  );
};

export default CartLink;
