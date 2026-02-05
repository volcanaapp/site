"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface ProductImageGalleryProps {
  images: Image[];
}

export function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <div className="flex md:flex-col gap-2 overflow-x-auto">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={cn(
              "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors",
              selectedImage.id === image.id
                ? "border-primary"
                : "border-transparent hover:border-primary/50"
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden">
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}