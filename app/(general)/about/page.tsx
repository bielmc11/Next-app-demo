import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Page",
  description: "Page that give information about the app",
};

export default function AboutPage() {
  return (
    <>
      <h2 className="text-5xl font-bold tracking-wider">About page</h2>
    </>
  );
}
