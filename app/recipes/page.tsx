import Image from "next/image";
import Link from "next/link";
import { recipes } from "@/lib/data";

export const metadata = { title: "Healthy Recipes | EatFresh" };

export default function RecipesPage() {
  return (
    <section className="container-default py-14 md:py-20">
      <div className="mb-10 max-w-[60ch]">
        <span className="badge mb-4">Nutritious · Low Calorie · Seasonal</span>
        <h1 className="font-display text-3xl md:text-4xl mb-4">Healthy recipes from our fresh produce</h1>
        <p className="text-textMuted text-base">
          Simple, nutritious recipes made from the fruits and vegetables sold on EatFresh —
          seasonal specials, low-calorie bowls, and healthy ones for every craving.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((r) => (
          <div key={r.slug} className="card overflow-hidden flex flex-col">
            <div className="relative h-44 md:h-48">
              <Image src={r.image} alt={r.title} fill className="object-cover" loading="lazy" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {r.tags.map((t) => (
                  <span key={t} className="badge badge-gold">{t}</span>
                ))}
              </div>
              <h3 className="font-display text-lg mb-1">{r.title}</h3>
              <p className="text-xs text-textMuted mb-4">{r.benefit}</p>
              <Link href={`/recipes/${r.slug}`} className="mt-auto text-sm font-semibold text-primary underline underline-offset-4">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}