import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default async function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Make data{' '}
          <span className="text-blue-600">accessible</span>
        </h1>
        <Link href="/posts" className=" text-3xl pt-40 font-bold underline text-blue-500">
          Posts
        </Link>
      </div>
    </MaxWidthWrapper>
  );
}
