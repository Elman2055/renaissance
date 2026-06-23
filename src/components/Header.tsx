import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const INSTAGRAM_URL = "https://www.instagram.com/renaissance.parfum/";
const WHATSAPP_URL = "https://wa.me/77000070720";

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const MENU_TRANSITION_MS = 300;

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeight = () => setHeaderHeight(header.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuVisible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuVisible]);

  const openMenu = () => {
    setMenuVisible(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMenuOpen(true));
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    window.setTimeout(() => setMenuVisible(false), MENU_TRANSITION_MS);
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        <header
          ref={headerRef}
          className="relative z-20 border-b border-stone-200/80 bg-[#faf8f5]/95 backdrop-blur-sm"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link
              to="/"
              className="flex items-center gap-4 transition-opacity hover:opacity-80"
              onClick={closeMenu}
            >
              <img
                src={logo}
                alt="Renaissance Parfume"
                className="h-14 w-14 object-contain"
              />
              <div>
                <p className="text-xs tracking-[0.35em] text-stone-500 uppercase">
                  Renaissance
                </p>
                <p className="text-xl font-semibold tracking-wide text-stone-900">
                  Parfume
                </p>
              </div>
            </Link>

            <button
              type="button"
              onClick={menuVisible ? closeMenu : openMenu}
              className="relative flex h-10 w-10 items-center justify-center p-2 transition-opacity hover:opacity-70 cursor-pointer"
              aria-label={menuVisible ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuVisible}
            >
              <span className="relative block h-5 w-6" aria-hidden="true">
                <span
                  className={`absolute left-0 block h-0.5 w-6 bg-stone-800 transition-all duration-300 ease-out ${
                    menuOpen
                      ? "top-1/2 -translate-y-1/2 rotate-45"
                      : "top-0 rotate-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-stone-800 transition-all duration-300 ease-out ${
                    menuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-6 bg-stone-800 transition-all duration-300 ease-out ${
                    menuOpen
                      ? "top-1/2 -translate-y-1/2 -rotate-45"
                      : "bottom-0 rotate-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </header>

        {menuVisible && (
          <button
            type="button"
            className={`fixed right-0 bottom-0 left-0 z-10 bg-stone-900/40 backdrop-blur-[2px] transition-opacity duration-300 ease-out ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ top: headerHeight }}
            onClick={closeMenu}
            aria-label="Закрыть меню"
          />
        )}

        {menuVisible && (
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
                      <WhatsAppIcon />
                    </a>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-600 transition-colors hover:text-[#ea6783]"
                      aria-label="Instagram"
                    >
                      <InstagramIcon />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
