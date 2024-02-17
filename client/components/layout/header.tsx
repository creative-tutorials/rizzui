import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
export function Header() {
  return (
    <div
      id="h-section"
      className="flex items-center justify-center w-full fixed bg-transparent"
    >
      <header className="fixed md:top-4 lg:top-4 top-0 md:rounded-full lg:rounded-full w-full md:max-w-xl lg:max-w-xl p-3 px-5 flex items-center justify-between bg-black/80 backdrop-blur-sm">
        <div id="fx">
          <Link href="/">
            <Image
              src="/Logo Bg.png"
              alt="Next.js Logo"
              width={50}
              height={50}
              priority
            />
          </Link>
        </div>
        <div id="links" className="flex items-center gap-6">
          <Link href="/docs">Docs</Link>
          <Link href="/components">Components</Link>
          <Link href="/github">GitHub</Link>
        </div>
        <div id="theme-switcher">
          <Moon />
        </div>
      </header>
    </div>
  );
}
