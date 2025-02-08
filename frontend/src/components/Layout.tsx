// Layout.tsx
import { Appbar } from "./Appbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Appbar />
      {/* Ensure content starts below the fixed Appbar */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
