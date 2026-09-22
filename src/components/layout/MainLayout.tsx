import React from "react";
import Container from "@/components/ui/Container";
import HeroImage from "@/components/sections/hero/HeroImage";
import InPageHashScroll from "@/components/layout/InPageHashScroll";
import Navigation from "@/components/layout/Navigation";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen px-4 py-6 lg:px-8 lg:py-10">
      <InPageHashScroll />
      <Container>
        <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:gap-8">
          <aside className="w-full lg:sticky lg:top-10 lg:w-95 lg:shrink-0">
            <HeroImage />
          </aside>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col rounded-2xl border border-border bg-surface lg:h-[calc(100vh-5rem)] lg:overflow-hidden">
              <Navigation />
              <main className="panel-scroll flex flex-col gap-10 px-6 py-8 md:px-8 md:py-10 lg:min-h-0 lg:flex-1 lg:overflow-y-auto">
                {children}
              </main>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainLayout;
