import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { INSTAGRAM_URL, WHATSAPP_URL } from "../../../constants/socialLinks";

type THeaderMenu = { menuOpen: boolean; closeMenu: () => void };

const HeaderMenu = ({ menuOpen, closeMenu }: THeaderMenu) => {
  return (
    <div
      className={`relative z-20 grid transition-[grid-template-rows] duration-300 ease-out ${
        menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <nav className="border-b border-stone-200/80 bg-[#faf8f5] shadow-lg">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col px-8">
              <Link
                to="/about"
                onClick={closeMenu}
                className="border-b border-stone-200 py-5 text-lg tracking-[0.25em] text-stone-800 uppercase transition-colors hover:text-[#8b6914]"
              >
                О нас
              </Link>
              <Link
                to="/"
                onClick={closeMenu}
                className="border-b border-stone-200 py-5 text-lg tracking-[0.25em] text-stone-800 uppercase transition-colors hover:text-[#8b6914]"
              >
                Каталог
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 px-8 py-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 transition-colors hover:text-[#25D366]"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-3xl" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 transition-colors hover:text-[#ea6783]"
                aria-label="Instagram"
              >
                <FaInstagram className="text-3xl" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMenu;
