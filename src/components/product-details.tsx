"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductDetails({ product, dictionary }: { product: any; dictionary: any }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div>
      <Badge variant="default" className="bg-primary text-primary-foreground mb-4">
        {dictionary.bestseller}
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
        {product.name}
      </h1>
      <p className="text-3xl font-semibold mb-6">{product.price}</p>
      <p className="text-muted-foreground mb-8">{product.description}</p>

      <div className="space-y-6">
        {/* Color Selector */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">{dictionary.color}</h3>
          <div className="flex items-center gap-2">
            {product.colors.map((color: any) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={cn(
                  "h-8 w-8 rounded-full border-2 transition-all",
                  selectedColor === color.name ? "border-primary scale-110" : "border-border"
                )}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select color ${color.name}`}
              />
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">{dictionary.size}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {product.sizes.map((size: string) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={cn(
                  "h-10 px-4 rounded-lg border font-medium transition-colors",
                  selectedSize === size
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card hover:bg-muted"
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">{dictionary.quantity}</h3>
          <div className="flex items-center border rounded-lg w-fit">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Button size="lg" className="w-full font-bold text-lg py-6 mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
        {dictionary.add_to_cart}
      </Button>

      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
        <Truck className="h-4 w-4" />
        <span>{dictionary.shipping_info}</span>
      </div>

      <Accordion type="single" collapsible className="w-full mt-8">
        <AccordionItem value="item-1">
          <AccordionTrigger>{dictionary.details_title}</AccordionTrigger>
          <AccordionContent>
            {product.details}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{dictionary.shipping_title}</AccordionTrigger>
          <AccordionContent>
            {dictionary.shipping_content}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}