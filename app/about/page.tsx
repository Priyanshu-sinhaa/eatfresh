import Image from "next/image";

const events = [
  {
    title: "Recipe Competitions",
    desc: "Members cook up healthy dishes using seasonal produce, sharing recipes and prizes with the community.",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/933ac503d9ab76648ca57762b10a5f3ae268ecff.jpg",
  },
  {
    title: "Plantation Drives",
    desc: "Volunteers join local farms to plant saplings and support sustainable, organic agriculture.",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/24eab32890ce9c92fdb99309415ecb1c747d2ec6.jpg",
  },
  {
    title: "Farm Visits",
    desc: "Community members tour our partner organic and hydroponic farms to see fresh produce being grown firsthand.",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/0474b0c020b35ab5aa0f49227c4d0e6bc53b23a7.jpg",
  },
  {
    title: "Farmers' Market Days",
    desc: "Pop-up markets where members meet growers directly and pick up seasonal specials fresh off the farm.",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/2c632ee5dec87f20200e650b48135fd8f90a0864.jpg",
  },
];

export const metadata = { title: "About Us | EatFresh" };

export default function AboutPage() {
  return (
    <>
      <section className="container-default py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge mb-4">A Community, Not Just a Store</span>
          <h1 className="font-display text-3xl md:text-4xl mb-5">We're a movement for healthy, fresh living</h1>
          <p className="text-textMuted text-base max-w-[52ch]">
            EatFresh started with a simple belief: everyone deserves access to nutritious, organically
            grown fruits and vegetables. What began as a small produce box has grown into a community
            of farmers, home cooks, and health-conscious families working together — sourcing seasonal,
            low-calorie, chemical-free food and celebrating it together.
          </p>
        </div>
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
          <Image src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/3f871106368329b59a319a0ad4a0e1e912b61897.jpg" alt="Colorful outdoor produce market representing the EatFresh community" fill className="object-cover" priority />
        </div>
      </section>

      <section className="bg-surfaceOffset py-16 md:py-20">
        <div className="container-default">
          <h2 className="font-display text-2xl md:text-3xl mb-10 max-w-[36ch]">Moments from our community</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {events.map((e) => (
              <div key={e.title} className="card overflow-hidden">
                <div className="relative h-36 md:h-44">
                  <Image src={e.image} alt={e.title} fill className="object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base mb-1">{e.title}</h3>
                  <p className="text-xs text-textMuted">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-default py-16 md:py-24 text-center">
        <h2 className="font-display text-2xl md:text-3xl mb-4 max-w-[36ch] mx-auto">
          Come grow, cook, and eat fresh with us
        </h2>
        <p className="text-textMuted text-base max-w-[50ch] mx-auto mb-8">
          Whether it's a plantation drive, a recipe competition, or your weekly produce order —
          there's a place for you in the EatFresh community.
        </p>
        <a href="/products" className="btn-primary">Start Shopping</a>
      </section>
    </>
  );
}