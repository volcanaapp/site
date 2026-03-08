import Image from "next/image";

interface FeaturedItemProps {
  imageSrc: string;
  alt: string;
}

export function FeaturedItem({ imageSrc, alt }: FeaturedItemProps) {
  return (
    <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-xl shadow-gray-200/50 w-full">
      <div className="relative aspect-[3/2] w-full">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}