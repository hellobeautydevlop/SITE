import { useEffect } from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Injects a JSON-LD structured data script into the document head.
 * Cleans up on unmount to avoid duplicate scripts across route changes.
 */
export default function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    script.setAttribute("data-jsonld", "true");
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
}
