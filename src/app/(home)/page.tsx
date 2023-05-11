import { Welcome, About, Features, FAQ } from "@/components/home";

export default function HomePage() {
  return (
    <main>
      <Welcome />
      <About />
      <Features />
      {/* @ts-expect-error Server Component */}
      <FAQ />
    </main>
  );
}
