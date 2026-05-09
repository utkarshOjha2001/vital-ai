import Header from './components/Header';

export default function Home() {
  return (
 <div
  className="
    absolute inset-0 -z-10 min-h-screen w-full
    dark:bg-background
    [background:radial-gradient(circle_900px_at_50%_-10%,color-mix(in_srgb,var(--secondary)_15%,transparent)_0%,transparent_70%)]
  "
>
  <Header />

</div>
  );
}