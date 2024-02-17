import { Header } from "@/components/layout/header";
import Link from "next/link";
import { Introduction } from "@/components/layout/docs/sections/introduction";
import { Sidebar } from "@/components/layout/sidebar";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Header />
      <div className="flex justify-between ">
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar />
          <Suspense fallback={<div>Loading...</div>}>
            <Introduction />
          </Suspense>
        </Suspense>
      </div>
    </>
  );
}
