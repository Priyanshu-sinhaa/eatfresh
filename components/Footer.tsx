'use client';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-text-inverse)] mt-24">
      <div className="container-default py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path d="M24 6C15 6 8 13 8 22c0 10 7.5 18 16 18s16-8 16-18C40 13 33 6 24 6Z" stroke="currentColor" strokeWidth="2.5" />
              <path d="M24 6c3 4 3 9 0 13-3-4-3-9 0-13Z" fill="currentColor" />
            </svg>
            <span className="font-display text-lg font-semibold">EatFresh</span>
          </div>
          <p className="text-sm opacity-80 max-w-[28ch]">
            Fresh, organic, seasonal produce grown with modern farming and delivered with care.
          </p>
        </div>

        <nav aria-label="Explore">
          <h3 className="text-sm font-semibold uppercase tracking-wide opacity-70 mb-4">Explore</h3>
          <ul role="list" className="space-y-2 text-sm">
            <li><Link href="/products" className="opacity-85 hover:opacity-100">Products</Link></li>
            <li><Link href="/farms" className="opacity-85 hover:opacity-100">Our Farms</Link></li>
            <li><Link href="/recipes" className="opacity-85 hover:opacity-100">Recipes</Link></li>
            <li><Link href="/about" className="opacity-85 hover:opacity-100">About Us</Link></li>
          </ul>
        </nav>

        <nav aria-label="Categories">
          <h3 className="text-sm font-semibold uppercase tracking-wide opacity-70 mb-4">Categories</h3>
          <ul role="list" className="space-y-2 text-sm">
            <li><span className="opacity-85">Seasonal Specials</span></li>
            <li><span className="opacity-85">Low-Calorie Picks</span></li>
            <li><span className="opacity-85">Nutritious Greens</span></li>
            <li><span className="opacity-85">Farm-Fresh Fruits</span></li>
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide opacity-70 mb-4">Join the Movement</h3>
          <p className="text-sm opacity-85 mb-4">Get seasonal picks and community event updates.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              placeholder="you@example.com"
              className="min-w-0 flex-1 rounded-full px-4 py-2 text-sm text-[var(--color-text)] bg-white/90"
            />
            <button type="submit" className="rounded-full bg-white/90 text-[var(--color-primary)] px-4 py-2 text-sm font-semibold">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/15 container-default py-6 text-xs opacity-70 flex flex-col sm:flex-row justify-between gap-2">
        <p>© 2026 EatFresh. All rights reserved.</p>
        <p>Ludhiana, Punjab · A community for fresh, healthy living.</p>
      </div>
    </footer>
  );
}