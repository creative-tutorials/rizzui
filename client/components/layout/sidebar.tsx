import Link from "next/link";
export function Sidebar() {
  return (
    <div
      id="sidebar"
      className="fixed top-0 left-0 p-8 w-full max-w-52 h-full bg-transparent border-r border-zinc-800"
    >
      <div id="links">
        <h6 className="font-medium text-lg">Getting Started</h6>
        <ul className="list-disc text-[#939496] flex flex-col gap-2 mt-4">
          <li>
            <Link href="/docs">Introducion</Link>
          </li>
          <li>
            <Link href="/docs/installation">Installation</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
