import type { ReactNode } from "react";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | undefined;
}

export default function MainLayout({
  children,
  className = "",
  ...others
}: LayoutProps) {
  return (
    <>
      <div
        className={`${className} min-h-screen font-light text-neutral-700 dark:text-neutral-300`}
        {...others}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
