import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export function SimpleFooter() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Features", href: "#" },
    { label: "About", href: "/about" },
    { label: "Testimonials", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Download", href: "#" },
  ];

  return (
    <footer className="bg-[#F3F4F6] py-12 md:py-16 text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Top Section: Socials & Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          
          {/* Socials */}
          <div className="flex items-center gap-4">
            <span className="font-bold text-gray-900">Follow us</span>
            <div className="flex gap-3">
              <Link href="#" className="bg-black text-white p-1.5 rounded-sm hover:opacity-80 transition-opacity">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="bg-black text-white p-1.5 rounded-sm hover:opacity-80 transition-opacity">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="bg-black text-white p-1.5 rounded-sm hover:opacity-80 transition-opacity">
                <Youtube className="h-4 w-4" />
              </Link>
              <Link href="#" className="bg-black text-white p-1.5 rounded-sm hover:opacity-80 transition-opacity">
                <XIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <span className="font-bold text-gray-900 whitespace-nowrap">Get the Newsletter</span>
            <div className="flex w-full sm:w-auto shadow-sm">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white border-none rounded-r-none h-10 w-full sm:w-64 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="bg-[#1C1C1B] text-white hover:bg-black rounded-l-none h-10 px-6 font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 mb-16 text-sm font-semibold text-gray-600">
          {links.map((link, index) => (
            <div key={link.label} className="flex items-center">
              <Link href={link.href} className="hover:text-gray-900 transition-colors">
                {link.label}
              </Link>
              {index < links.length - 1 && (
                <span className="ml-6 text-gray-300 hidden sm:inline-block">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section: Copyright & Address */}
        <div className="text-center text-sm text-gray-500 space-y-2">
          <p>1234 Kennedy St, New York, NY 123456, USA</p>
          <p>© {currentYear} Volcana™. All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
}