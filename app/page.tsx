import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";

export default function Home() {
  const topProducts = products.slice(0, 4);
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-default grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <span className="badge mb-5">Organically Grown · Farm to Table</span>
            <h1 className="font-display text-[clamp(2.5rem,1rem+4vw,4.5rem)] font-medium text-text mb-6">
              Fresh, seasonal produce — sourced the way nature intended.
            </h1>
            <p className="text-textMuted text-base md:text-lg max-w-[46ch] mb-8">
              EatFresh partners with organic farms using hydroponics, aeroponics, and regenerative
              soil practices to bring you nutritious, low-calorie, chemical-free fruits and vegetables —
              picked at peak freshness, delivered fast.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">Shop Fresh Produce</Link>
              <Link href="/farms" className="btn-ghost">See Our Farms</Link>
            </div>
          </div>
          <div className="relative h-[340px] md:h-[440px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/2c632ee5dec87f20200e650b48135fd8f90a0864.jpg"
              alt="Colorful farmers market stall piled with fresh organic fruits and vegetables"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="container-default py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <h2 className="font-display text-2xl md:text-3xl mb-4">Grown with modern, organic methods</h2>
            <p className="text-textMuted text-base mb-6">
              Every crate we deliver traces back to a real farm — from open-field organic plots to
              controlled hydroponic greenhouses — all free from synthetic pesticides.
            </p>
            <Link href="/farms" className="text-primary font-semibold text-sm underline underline-offset-4">
              Explore our farms →
            </Link>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <div className="relative h-40 md:h-56 rounded-lg overflow-hidden">
              <Image src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/69e87896272eaae06efa9a6bdbe3b2cad4e39b00.jpg" alt="Hydroponic greenhouse with leafy greens growing in white channels" fill className="object-cover" loading="lazy" />
            </div>
            <div className="relative h-40 md:h-56 rounded-lg overflow-hidden">
              <Image src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e2e2d89a669857ca3c467846800f5487ccf4beaf.jpg" alt="Aerial view of organic cultivated farm fields" fill className="object-cover" loading="lazy" />
            </div>
            <div className="relative h-40 md:h-56 rounded-lg overflow-hidden col-span-2">
              <Image src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/a5b668c9c5a7ce715827e78f259bd5074f55c051.jpg" alt="Fresh organic vegetables displayed in wooden crates" fill className="object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surfaceOffset py-16 md:py-20">
        <div className="container-default">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="badge badge-gold mb-3">Top Picks</span>
              <h2 className="font-display text-2xl md:text-3xl">This week's seasonal specials</h2>
            </div>
            <Link href="/products" className="btn-ghost">View all products</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {topProducts.map((p) => (
              <div key={p.slug} className="card overflow-hidden">
                <div className="relative h-36 md:h-44">
                  <Image src={p.image} alt={p.name} fill className="object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <span className="badge mb-2">{p.tags[0]}</span>
                  <h3 className="font-display text-lg mb-1">{p.name}</h3>
                  <p className="text-xs text-textMuted mb-3">{p.benefit}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">₹{p.price}/kg</span>
                    <Link href={`/products/${p.slug}`} className="text-xs font-semibold text-primary underline underline-offset-4">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-default py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-72 md:h-96 rounded-xl overflow-hidden order-2 md:order-1">
            <Image src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/15ef585ba94ec388f3602e4690fbe07dce0716d0.jpg" alt="Vibrant farmers market stall with assorted fresh produce" fill className="object-cover" loading="lazy" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-display text-2xl md:text-3xl mb-4">More than a store — a community</h2>
            <p className="text-textMuted text-base mb-6 max-w-[48ch]">
              EatFresh began as a movement to reconnect people with real, healthy food. Join plantation
              drives, recipe competitions, and farm visits with fellow members who care about nutritious,
              low-calorie, wholesome living.
            </p>
            <Link href="/about" className="btn-primary">Join the movement</Link>
          </div>
        </div>
      </section>
    </>
  );
}