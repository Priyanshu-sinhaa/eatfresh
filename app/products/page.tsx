import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";

export const metadata = {
  title: "Shop Fresh Organic Fruits & Vegetables | EatFresh",
};

export default function ProductsPage() {
  return (
    <section className="container-default py-14 md:py-20">
      <div className="mb-10 max-w-[60ch]">
        <span className="badge mb-4">Farm Fresh · Organically Grown</span>
        <h1 className="font-display text-3xl md:text-4xl mb-4">Fresh fruits & vegetables</h1>
        <p className="text-textMuted text-base">
          Browse our seasonal specials, nutritious picks, and low-calorie favorites — all sourced
          directly from organic farms and hydroponic greenhouses.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.slug} className="card overflow-hidden flex flex-col">
            <div className="relative h-44 md:h-52">
              <Image src={p.image} alt={p.name} fill className="object-cover" loading="lazy" />
              <span className="absolute top-3 left-3 badge bg-white/90">{p.category}</span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {p.tags.map((t) => (
                  <span key={t} className="badge badge-gold">{t}</span>
                ))}
              </div>
              <h3 className="font-display text-lg mb-1">{p.name}</h3>
              <p className="text-xs text-textMuted mb-4">{p.benefit}</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-semibold text-sm">₹{p.price}/kg</span>
                <div className="flex gap-2">
                  <Link href={`/products/${p.slug}`} className="btn-ghost text-xs px-3 py-1.5">Details</Link>
                  <button className="btn-primary text-xs px-3 py-1.5">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}