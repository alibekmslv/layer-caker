import { SanityLive } from "@/sanity/lib/live";
import "@/app/globals.css";
import { Header } from "@/components/header";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-white min-h-screen">
      <Header />
      {children}
      <SanityLive />
    </section>
  );
}
