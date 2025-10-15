import { Suspense, useEffect } from "react";
import type { ReactNode } from "react";
import "./index.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children } : LayoutProps) {
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
    document.documentElement.classList.toggle("light", theme === "light");
  }, []);

  return (
    <div className="antialiased">
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
