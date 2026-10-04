"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/common/Logo";

type NavbarProps = {
  onHomeClick?: () => void;
};

const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar({ onHomeClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at the top
      if (currentScrollY <= 20) {
        setShowNavbar(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Don't hide navbar while mobile menu is open
      if (menuOpen) {
        lastScrollY = currentScrollY;
        return;
      }

      // Scrolling down → hide
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }

      // Scrolling up → show
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setShowNavbar(true);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-transform duration-500 ease-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-full border-b border-black/10 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          {onHomeClick ? (
            <button
              type="button"
              aria-label="Go to home"
              onClick={onHomeClick}
              className="cursor-pointer"
            >
              <Logo />
            </button>
          ) : (
            <Link href="/" aria-label="Go to home">
              <Logo />
            </Link>
          )}

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-neutral-600 transition-all duration-300 hover:bg-black/5 hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="inline-flex rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((open) => !open);
              setShowNavbar(true);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-1/2 h-px w-full bg-black transition-transform duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />

              <span
                className={`absolute left-0 top-1/2 h-px w-full bg-black transition-transform duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-96 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-black/10 bg-white/95 p-4 backdrop-blur-xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block rounded-2xl px-4 py-3 text-sm text-neutral-600 transition-colors duration-300 hover:bg-black/5 hover:text-black"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={closeMenu}
              className="mt-2 block rounded-2xl bg-black px-4 py-3 text-center text-sm font-medium text-white"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
