import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-zinc-900 text-white">
      <div>Avatar Image</div>

      <div>
        <h1>{profile.name}</h1>
        <p>{profile.title}</p>
      </div>

      <Navigation />

      <div className="flex flex-col gap-2">
        {socials.map((social) => {
          const SocialIcon = social.icon;
          return (
            <Link
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon aria-hidden />
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
