"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/farms", label: "Our Farms" },
  { href: "/recipes", label: "Recipes" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-bg/85 border-b border-border">
      <nav className="container-default flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="EatFresh home">
          <svg width="30" height="30" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M24 6C15 6 8 13 8 22c0 10 7.5 18 16 18s16-8 16-18C40 13 33 6 24 6Z" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
            <path d="M24 6c3 4 3 9 0 13-3-4-3-9 0-13Z" fill="currentColor" className="text-primary" />
            <path d="M15 26c3 5 6 8 9 10M33 26c-3 5-6 8-9 10" stroke="currentColor" strokeWidth="1.5" className="text-primary" strokeLinecap="round" />
          </svg>
          <span className="font-display font-semibold text-lg text-text">EatFresh</span>
        </Link>

        <ul role="list" className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm font-medium text-textMuted hover:text-primary transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/products" className="btn-primary text-sm">Shop Now</Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-surface">
          <ul role="list" className="container-default flex flex-col py-4 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-text hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/products" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
                Shop Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}