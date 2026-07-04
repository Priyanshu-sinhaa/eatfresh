import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes } from "@/lib/data";

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export default async function RecipeDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return notFound();

  return (
    <>
      <section className="relative h-[280px] md:h-[380px]">
        <Image src={recipe.image} alt={recipe.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full container-default pb-8">
          <span className="badge badge-gold mb-3">{recipe.tags[0]}</span>
          <h1 className="font-display text-3xl md:text-4xl text-white max-w-[26ch]">{recipe.title}</h1>
        </div>
      </section>

      <section className="container-default py-12 md:py-16 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <div className="flex flex-wrap gap-2 mb-5">
            {recipe.tags.map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
          <p className="text-text text-base leading-relaxed max-w-[65ch]">{recipe.description}</p>
        </div>

        <aside className="card p-6 h-fit">
          <h2 className="font-display text-lg mb-1">Key benefit</h2>
          <p className="text-textMuted text-sm mb-5">{recipe.benefit}</p>
          <h2 className="font-display text-lg mb-3">Shop ingredients</h2>
          <ul role="list" className="space-y-2 mb-5">
            {recipe.ingredients.map((ing) => (
              <li key={ing.slug}>
                <Link href={`/products/${ing.slug}`} className="text-sm font-medium text-primary underline underline-offset-4">
                  {ing.name} →
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/recipes" className="btn-ghost w-full justify-center text-center block">
            Back to Recipes
          </Link>
        </aside>
      </section>
    </>
  );
}