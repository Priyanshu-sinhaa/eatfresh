import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <>
      <section className="relative h-[280px] md:h-[380px]">
        <Image src={product.image} alt={product.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full container-default pb-8">
          <span className="badge badge-gold mb-3">{product.tags[0]}</span>
          <h1 className="font-display text-3xl md:text-4xl text-white">{product.name}</h1>
        </div>
      </section>

      <section className="container-default py-12 md:py-16 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <div className="flex flex-wrap gap-2 mb-5">
            {product.tags.map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
          <p className="text-text text-base leading-relaxed max-w-[65ch] mb-6">{product.description}</p>
          <div className="card p-5 max-w-[420px]">
            <h2 className="font-display text-lg mb-2">Key benefit</h2>
            <p className="text-textMuted text-sm">{product.benefit}</p>
          </div>
        </div>

        <aside className="card p-6 h-fit">
          <p className="text-textMuted text-sm mb-1">Price</p>
          <p className="font-display text-3xl mb-5">₹{product.price}<span className="text-sm text-textMuted">/kg</span></p>
          <button className="btn-primary w-full justify-center mb-3">Buy Now</button>
          <Link href="/products" className="btn-ghost w-full justify-center text-center block">
            Back to Products
          </Link>
        </aside>
      </section>
    </>
  );
}