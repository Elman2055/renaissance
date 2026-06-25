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
      className={`cursor-pointer items-center gap-2 rounded-sm border border-[#8b6914] px-2 py-2 text-sm font-semibold bg-[#8b6914] text-white sm:px-5 text-center ${className}`}
    >
      Купить
    </button>
  );
};

export default AddToCartButton;
