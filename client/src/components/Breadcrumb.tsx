import { ChevronRight } from "lucide-react";
import { useLocation } from "wouter";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const [, setLocation] = useLocation();

  return (
    <nav className="bg-background/50 py-3 px-4 md:px-0 border-b border-border/30">
      <div className="container">
        <div className="flex items-center gap-2 text-sm">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-foreground/40" />
              )}
              {item.href ? (
                <button
                  onClick={() => setLocation(item.href!)}
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-foreground/70">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
