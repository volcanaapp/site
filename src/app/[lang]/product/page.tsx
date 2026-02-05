import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { ProductImageGallery } from "@/components/product-image-gallery";
import { ProductDetails } from "@/components/product-details";
import { RelatedProducts } from "@/components/related-products";

export default async function ProductPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const productDict = dictionary.product_page;

  const product = {
    name: productDict.mock_product.name,
    images: [
      { id: 1, src: "/volcana-nature.png", alt: "Volcana Nature Capsule" },
      { id: 2, src: "https://a.storyblok.com/f/314917/1024x1024/50f825a393/02.png", alt: "Product detail 1" },
      { id: 3, src: "https://a.storyblok.com/f/314917/1024x1024/b5e6a3c9d8/use-case-workflow.png", alt: "Product detail 2" },
      { id: 4, src: "https://a.storyblok.com/f/314917/1024x1024/356a6a256c/03.png", alt: "Product in use" },
    ],
    price: productDict.mock_product.price,
    colors: productDict.mock_product.colors,
    sizes: productDict.mock_product.sizes,
    description: productDict.mock_product.description,
    details: productDict.mock_product.details,
  };

  return (
    <div className="bg-background">
      <div className="container max-w-screen-xl py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ProductImageGallery images={product.images} />
          <ProductDetails product={product} dictionary={productDict} />
        </div>
      </div>
      <RelatedProducts products={productDict.mock_product.related_products} dictionary={productDict} />
    </div>
  );
}