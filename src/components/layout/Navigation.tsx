import { navigation } from "@/data/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-20 flex shrink-0 items-center justify-between gap-4 rounded-t-2xl border-b border-border bg-surface px-6 py-4 md:px-8 lg:static">
      <ul className="flex items-center gap-6 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
        {navigation.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="whitespace-nowrap text-sm font-bold text-muted transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  );
};

export default Navigation;
