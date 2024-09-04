import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Page",
  description: "Page that give information about the app",
};

export default function AboutPage() {
  return (
    <div className="w-screen h-screen">
      <span>About page</span>
    </div>
  );
}
