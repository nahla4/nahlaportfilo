// app/components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const pathname = usePathname();

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#skills", label: "skills" },
    { href: "#education", label: "education" },
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
    <Link
  href="/"
  className="text-3xl font-extrabold text-pink-500 tracking-widest font-jetbrains"
>
  &lt;/NAHLA SAADI&gt;
</Link>



      <div className="flex gap-8 text-lg font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setActive(link.href)}
            className={`transition-colors duration-300 ${
              active === link.href
                ? "text-gray-500"
                : "text-pink-500 hover:text-pink-300"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
