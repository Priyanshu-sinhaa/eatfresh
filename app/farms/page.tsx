import Image from "next/image";

const techniques = [
  {
    title: "Organic Soil Farming",
    desc: "No synthetic pesticides or fertilizers — just composted, nutrient-rich soil and natural pest control that keeps produce chemical-free and nutritious.",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e2e2d89a669857ca3c467846800f5487ccf4beaf.jpg",
  },
  {
    title: "Hydroponics",
    desc: "Leafy greens like spinach grow in nutrient-rich water instead of soil, using up to 90% less water while staying pesticide-free and consistently fresh.",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/69e87896272eaae06efa9a6bdbe3b2cad4e39b00.jpg",
  },
  {
    title: "Aeroponics",
    desc: "Roots are suspended in air and misted with nutrients — a low-resource, high-yield method that produces exceptionally clean, healthy crops.",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/42df4bcea46833b8a1d815107346494d63607eeb.jpg",
  },
  {
    title: "Crop Rotation & Composting",
    desc: "Our partner farms rotate crops seasonally and compost farm waste, keeping soil alive and produce naturally nutrient-dense year after year.",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/24eab32890ce9c92fdb99309415ecb1c747d2ec6.jpg",
  },
];

export const metadata = { title: "Our Farms | EatFresh" };

export default function FarmsPage() {
  return (
    <>
      <section className="relative h-[280px] md:h-[380px]">
        <Image
          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e2e2d89a669857ca3c467846800f5487ccf4beaf.jpg"
          alt="Aerial view of organic farmland with cultivated fields"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center container-default">
          <span className="badge badge-gold mb-3 w-fit">Sustainably Grown</span>
          <h1 className="font-display text-3xl md:text-5xl text-white max-w-[24ch]">Our Farms & Growing Methods</h1>
        </div>
      </section>

      <section className="container-default py-14 md:py-20">
        <p className="text-textMuted text-base max-w-[65ch] mb-12">
          EatFresh partners with a network of organic farms across the region, combining traditional
          farming wisdom with modern agricultural techniques — from open-field organic plots to
          controlled hydroponic and aeroponic systems — to grow healthy, nutritious, chemical-free produce.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {techniques.map((t, i) => (
            <div key={t.title} className="card overflow-hidden flex flex-col">
              <div className="relative h-52 md:h-60">
                <Image src={t.image} alt={t.title} fill className="object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl mb-2">{t.title}</h2>
                <p className="text-textMuted text-sm">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surfaceOffset py-14 md:py-20">
        <div className="container-default grid md:grid-cols-3 gap-4">
          <div className="relative h-56 md:h-64 rounded-lg overflow-hidden md:col-span-2">
            <Image src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/7c45b01b691df6cf80fba47f54d950f563e88c37.jpg" alt="Fresh organic vegetables harvested from the farm" fill className="object-cover" loading="lazy" />
          </div>
          <div className="relative h-56 md:h-64 rounded-lg overflow-hidden">
            <Image src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/0474b0c020b35ab5aa0f49227c4d0e6bc53b23a7.jpg" alt="Hydroponic greenhouse with rows of leafy greens on elevated tables" fill className="object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}