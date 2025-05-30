"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-[#e5e7eb] shadow-lg">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/zerua capital def 2025 hor.webp"
              alt="Zerua Capital"
              height={48}
              width={180}
              style={{ height: "48px", width: "auto", objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-primary hover:text-accent transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="text-primary hover:text-accent transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/proceso"
              className="text-primary hover:text-accent transition-colors"
            >
              Proceso
            </Link>
            <Link
              href="/nosotros"
              className="text-primary hover:text-accent transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              className="text-primary hover:text-accent transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
