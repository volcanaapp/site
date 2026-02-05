import { ProductCard } from "./product-card";

export function RelatedProducts({ products, dictionary }: { products: any[], dictionary: any }) {
  return (
    <section className="w-full py-20 md:py-32 bg-muted/50">
      <div className="container max-w-screen-xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12">
          {dictionary.related_title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}