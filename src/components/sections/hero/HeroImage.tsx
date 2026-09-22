import Image from "next/image";
import Link from "next/link";
import HeroButtons from "./HeroButtons";
import TypewriterTitle from "./TypewriterTitle";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

const heroSocials = socials.filter(
  (social) => social.id === "linkedin" || social.id === "github",
);

const HeroImage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="relative h-140 w-full overflow-hidden rounded-2xl bg-background/50 before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:z-10 before:h-[38%] before:w-full before:rounded-b-2xl before:bg-linear-to-b before:from-transparent before:to-background/90 before:backdrop-blur-sm before:content-[''] lg:h-[calc(100vh-5rem)]">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={800}
          height={1202}
          sizes="(min-width: 1024px) 380px, 100vw"
          priority
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-1 pb-6 text-center">
          <h1 className="text-2xl font-bold text-foreground">{profile.name}</h1>
          <TypewriterTitle
            titles={profile.titles}
            className="text-sm text-muted"
          />

          <div className="mt-3 flex items-center gap-3">
            {heroSocials.map((social) => {
              const SocialIcon = social.icon;
              return (
                <Link
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <SocialIcon size={18} aria-hidden />
                </Link>
              );
            })}
          </div>

          <div className="mt-4">
            <HeroButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
