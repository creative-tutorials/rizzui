import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative h-screen flex items-center">
      <div
        id="image"
        className="fixed md:top-[-120px] lg:top-[-120px] top-[-220px] left-[-120px] animate-floating"
      >
        <Image
          src="/music-player.png"
          width={400}
          height={400}
          alt="Picture of the author"
          className="rounded-md"
        />
      </div>
      <div
        id="image"
        className="fixed md:bottom-[-120px] lg:bottom-[-120px] bottom-[-220px] right-[-120px] animate-floating"
      >
        <Image
          src="/login-page.png"
          width={400}
          height={400}
          alt="Picture of the author"
          className="rounded-md"
        />
      </div>
      <div id="s-wrapper" className="md:mt-40 lg:mt-40 mt-0">
        <section
          id="home"
          className="md:p-20 lg:p-20 p-10 flex flex-col gap-6 w-full h-full"
        >
          <hgroup className="flex flex-col gap-6">
            <h1 className="md:text-7xl lg:text-7xl text-5xl font-semibold">
              Build <span className="x text-[#749EFF] underline">amazing</span>{" "}
              websites with a <br className="md:block lg:block hidden" /> little
              bit of magic
            </h1>
            <p className="text-2xl text-[#B8BFC6]">
              Simple and intereactive Ui library
            </p>
          </hgroup>
          <div id="btn-wrapper" className="flex items-center gap-4">
            <Link href="/docs">
              <Button className="bg-[#426AC6] hover:bg-[#395fb8] rounded-full text-lg p-7 flex items-center gap-2">
                Get Started <ArrowRight />
              </Button>
            </Link>
            <Button className="bg-transparent border border-[#2A2B2D] hover:bg-zinc-900 rounded-full text-lg p-7 flex items-center gap-2">
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.246c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.475 0-.238-.013-1.025-.013-1.863C7 19.86 6.35 18.784 6.15 18.221c-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.012 1.35.725 1.538 1.025.9 1.513 2.338 1.088 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.087.387-1.987 1.025-2.687-.1-.25-.45-1.275.1-2.65 0 0 .837-.263 2.75 1.025a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.113 2.5.338 1.912-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.575.688.475A10.015 10.015 0 0 0 22 12.246c0-5.525-4.475-10-10-10Z"></path>
              </svg>{" "}
              GitHub
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
