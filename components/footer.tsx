import Image from "next/image";
import Link from "next/link";
import { Twitter, Mail } from "lucide-react";
import { PLAY_STORE_URL, SPONSOR_EMAIL } from "@/lib/site-content";

const footerLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/blog", label: "Blog" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/download", label: "Download" },
  { href: "/policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center justify-center gap-2.5 sm:justify-start">
              <div className="overflow-hidden rounded-lg shadow-sm">
                <Image
                  src="/logo.jpg"
                  alt="Flinck"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-cover"
                />
              </div>
              <span className="text-lg font-semibold tracking-tight text-gray-900">
                Flinck
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              The agricultural social marketplace connecting every part of the food value chain.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 sm:justify-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                Links
              </p>
              <ul className="mt-4 space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                Connect
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    Google Play
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/Flinck_space"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    <Twitter className="h-4 w-4" />
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SPONSOR_EMAIL}`}
                    className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Flinck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
