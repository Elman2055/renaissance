import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { useCartStore } from "../../store/cartStore";
import HeaderMenu from "./components/HeaderMenu";
import HeaderSearch from "./components/HeaderSearch";
import CartLink from "./components/CartLink";

const Header = () => {
  const lastAddedAt = useCartStore((state) => state.lastAddedAt);
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [showAddedNotice, setShowAddedNotice] = useState(false);

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

  useEffect(() => {
    if (!lastAddedAt) return;

    setTimeout(() => setShowAddedNotice(true), 0);
    const timer = window.setTimeout(() => setShowAddedNotice(false), 1200);
    return () => clearTimeout(timer);
  }, [lastAddedAt]);

  const openMenu = () => {
    setMenuVisible(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMenuOpen(true));
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    window.setTimeout(() => setMenuVisible(false), 300);
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

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={menuVisible ? closeMenu : openMenu}
                className="relative flex h-10 w-10 cursor-pointer items-center justify-center p-2 transition-opacity hover:opacity-70"
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
                      menuOpen
                        ? "scale-x-0 opacity-0"
                        : "scale-x-100 opacity-100"
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
          </div>

          <HeaderSearch menuOpen={menuOpen} closeMenu={closeMenu} />
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
          <HeaderMenu menuOpen={menuOpen} closeMenu={closeMenu} />
        )}

        <CartLink showAddedNotice={showAddedNotice} closeMenu={closeMenu} />
      </div>
    </>
  );
};

export default Header;
