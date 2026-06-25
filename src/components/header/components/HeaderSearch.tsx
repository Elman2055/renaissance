import { Autocomplete } from "@mantine/core";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { productCards } from "../../../constants/productCards";
import { searchProducts } from "../../../utils/searchProducts";

type THeaderSearch = { menuOpen: boolean; closeMenu: () => void };

const HeaderSearch = ({ menuOpen, closeMenu }: THeaderSearch) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const results = searchProducts(value);
  const options = results.map((product) => product.name);

  const goToProduct = (name: string) => {
    const product = productCards.find((item) => item.name === name);
    if (!product) return;
    if (menuOpen) {
      closeMenu();
    }

    setValue("");
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="border-t border-stone-200/80 px-6 py-3">
      <div className="mx-auto max-w-lg">
        <Autocomplete
          value={value}
          onChange={setValue}
          data={options}
          placeholder="Поиск ароматов..."
          limit={8}
          onOptionSubmit={goToProduct}
          onKeyDown={(event) => {
            if (event.key !== "Enter" || results.length === 0) return;

            event.preventDefault();
            goToProduct(results[0].name);
          }}
          filter={({ options }) => options}
          rightSection={
            <FaSearch aria-hidden className="text-lg text-stone-500" />
          }
          rightSectionPointerEvents="none"
          aria-label="Поиск ароматов"
          styles={{
            input: {
              backgroundColor: "#faf8f5",
              borderColor: "rgba(214, 211, 209, 0.8)",
              color: "#1c1917",
              fontFamily: '"Crimson Text", serif',
              fontSize: "1rem",
              "&::placeholder": {
                color: "#a8a29e",
              },
              "&:focus": {
                borderColor: "#8b6914",
              },
            },
            dropdown: {
              borderColor: "rgba(214, 211, 209, 0.8)",
              boxShadow: "0 8px 24px rgba(28, 25, 23, 0.08)",
            },
            option: {
              fontFamily: '"Crimson Text", serif',
              fontSize: "0.95rem",
              borderBottom: "1px solid rgba(214, 211, 209, 0.8)",
              borderRadius: 0,
            },
          }}
        />
      </div>
    </div>
  );
};

export default HeaderSearch;
