"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { productCategories as dataProductCategories } from "@/src/data";

const productCategories = dataProductCategories.map(category => ({
  name: category.name,
  href: `/collections/${category.slug}`
}));

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full py-4 md:py-5 z-50 transition-all duration-300",
        isSticky
          ? "sticky-nav"
          : "bg-transparent absolute top-0 left-0 right-0"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center -ml-3">
            <div className="relative h-11 w-auto">
              {/* Use white logo for transparent header and color logo for sticky header */}
              {isSticky ? (
                <Image
                  src="/images/starhiherbs-logo.png"
                  alt="Star Hi Herbs"
                  width={180}
                  height={42}
                  className="object-contain"
                  style={{ maxHeight: '42px' }}
                  priority
                />
              ) : (
                <Image
                  src="/images/starhiherbs-logo-white.png"
                  alt="Star Hi Herbs"
                  width={180}
                  height={42}
                  className="object-contain"
                  style={{ maxHeight: '42px' }}
                  priority
                />
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="nav-link flex items-center gap-1">
                  Products <ChevronDown size={16} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60 bg-white py-2">
                {productCategories.map((category) => (
                  <DropdownMenuItem key={category.name} asChild>
                    <Link
                      href={category.href}
                      className="px-4 py-2 hover:bg-gray-100 text-[#214842] hover:text-[#258F67] transition-colors duration-200 w-full text-left"
                    >
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/innovation" className="nav-link">
              Innovation
            </Link>
            <Link href="/sustainability" className="nav-link">
              Sustainability
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          {/* Action Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Button
              asChild
              className="cta-primary py-3 px-6 h-auto"
            >
              <Link href="/request-quote">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden ${isSticky ? 'text-[#214842]' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-[#214842] font-medium py-2 hover:text-[#258F67]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#214842] font-medium py-2 hover:text-[#258F67]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            {/* Mobile Products with accordion effect */}
            <div className="border-b border-gray-100 pb-2">
              <button
                className="flex justify-between items-center w-full text-[#214842] font-medium py-2"
                onClick={(e) => {
                  e.preventDefault();
                  const submenu = document.getElementById("products-submenu");
                  if (submenu) {
                    submenu.classList.toggle("hidden");
                  }
                }}
              >
                <span>Products</span>
                <ChevronDown size={16} />
              </button>
              <div id="products-submenu" className="hidden pl-4 space-y-2 mt-2">
                {productCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="block text-[#214842] hover:text-[#258F67] py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/innovation"
              className="text-[#214842] font-medium py-2 hover:text-[#258F67]"
              onClick={() => setIsMenuOpen(false)}
            >
              Innovation
            </Link>
            <Link
              href="/sustainability"
              className="text-[#214842] font-medium py-2 hover:text-[#258F67]"
              onClick={() => setIsMenuOpen(false)}
            >
              Sustainability
            </Link>
            <Link
              href="/blog"
              className="text-[#214842] font-medium py-2 hover:text-[#258F67]"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-[#214842] font-medium py-2 hover:text-[#258F67]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <Button
              asChild
              className="cta-primary w-full justify-center mt-2"
            >
              <Link href="/request-quote">Request Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}