"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function Breadcrumbs() {
  const router = useRouter();
  const pathname = usePathname();

  // Split pathname into segments and remove empty strings
  const segments = pathname
    .split("/")
    .filter((segment) => segment !== "")
    .map((segment, index, array) => ({
      title: segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      href: `/${array.slice(0, index + 1).join("/")}`,
    }));

  return (
    <nav className="flex items-center space-x-4 px-4 py-3">
      <button
        className="flex items-center text-muted-foreground hover:text-foreground"
        onClick={() => router.back()}
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Go Back
      </button>
      {segments.length > 0 && (
        <>
          <span className="text-muted-foreground">/</span>
          <div className="flex items-center">
            {segments.map((segment, index) => (
              <div key={segment.href} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-muted-foreground">/</span>
                )}
                <Link
                  href={segment.href}
                  className={`transition-colors ${
                    pathname === segment.href
                      ? "text-blue-500"
                      : "text-primary hover:text-blue-light"
                  }`}
                >
                  {segment.title}
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}
