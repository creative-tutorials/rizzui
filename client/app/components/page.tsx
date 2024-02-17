import { Header } from "@/components/layout/header";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <div className="s-xw flex justify-between ">
        <div
          id="sidebar"
          className="fixed top-0 left-0 p-8 w-full max-w-52 h-full bg-transparent border-r border-zinc-800"
        >
          <div id="links">
            <h6 className="font-medium text-lg">Getting Started</h6>
            <ul className="list-disc text-[#939496] text-lg flex flex-col gap-2 mt-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Installation</Link>
              </li>
            </ul>
          </div>
        </div>
        <section className="w-full h-screen p-10 pt-20 px-64">
          <h1 className="text-4xl font-semibold">Introduction</h1>
        </section>
      </div>
    </>
  );
}
