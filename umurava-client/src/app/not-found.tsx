import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";

export default function NotFound() {
  return (
    <MainLayout>
      <div className="mt-10 py-48 flex flex-col justify-center items-center">
        <h1>This page is not found, go back home</h1>
        <Link className="underline" href={"/"}>
          Home
        </Link>
      </div>
    </MainLayout>
  );
}
