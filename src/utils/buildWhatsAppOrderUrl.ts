import { ORDER_WHATSAPP_PHONE } from "../constants/socialLinks";
import type { CartItem } from "../types/cart";
import type { Product } from "../types/product";

export const buildWhatsAppOrderUrl = (
  items: CartItem[],
  products: Product[],
) => {
  const lines: string[] = ["Здравствуйте! Хочу оформить заказ:"];

  items.forEach((item, index) => {
    const product = products.find((p) => p.id === item.productId);
    const name = product?.name ?? `Товар #${item.productId}`;

    lines.push(
      `${index + 1}. ${name}`,
      `   Объём: ${item.volume}`,
      `   Количество: ${item.quantity}`,
      "",
    );
  });

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${ORDER_WHATSAPP_PHONE}?text=${text}`;
};
