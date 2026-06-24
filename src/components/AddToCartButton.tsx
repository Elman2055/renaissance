import { useCartStore } from "../store/cartStore";

type AddToCartButtonProps = {
  productId: number;
  volume: string;
  price: number;
  className?: string;
};

const AddToCartButton = ({
  productId,
  volume,
  price,
  className = "",
}: AddToCartButtonProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    addItem({ productId, volume, price });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex w-fit cursor-pointer items-center gap-2 border border-[#8b6914] px-2 py-2 text-sm font-medium tracking-wider text-[#8b6914] uppercase transition-all duration-300 hover:bg-[#8b6914] hover:text-white sm:px-5 ${className}`}
    >
      В корзину
    </button>
  );
};

export default AddToCartButton;
