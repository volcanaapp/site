import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: any }) {
  return (
    <div className="group">
      <Link href="/product">
        <div className="aspect-square w-full bg-card rounded-2xl overflow-hidden mb-4 relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-muted-foreground">{product.price}</p>
      </Link>
    </div>
  );
}