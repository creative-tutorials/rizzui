import Image from "next/image";
export function Introduction() {
  return (
    <section className="w-full h-screen p-10 pt-20 px-64 flex flex-col gap-6">
      <hgroup className="flex flex-col gap-5">
        <h1 className="text-4xl font-semibold">Introduction</h1>
        <p className="text-[#a1a2a2]">Welcome to the RizzUI documentation!</p>
      </hgroup>
      <div>
        <Image
          src="/Meta Image.png"
          width={800}
          height={800}
          alt="RizzUi meta image"
          className="rounded-lg border border-zinc-800"
        />
      </div>
      <section>
        <hgroup className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">What is RizzUI?</h2>
          <p className="text-[#a1a2a2]">
            RizzUI is a simple and interactive UI library that helps you build
            beatiful websites. RizzUI is created on top of <br /> TailwindCSS,
            ShadCN and NextUI.
          </p>
          <p className="text-[#a1a2a2]">
            The goal of RizzUI is to simplify the development process when
            building websites, providing beautiful and <br /> adaptive system
            design for an enhanced user experience.
          </p>
        </hgroup>
      </section>
    </section>
  );
}
