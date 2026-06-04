import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

/**
 * Design Philosophy: Modern Luxury Minimalism
 * - Instagram feed component showcasing salon's real content
 * - Uses Instagram's official embed code for real posts
 * - Links to Instagram profile for social proof
 */

export default function InstagramFeed() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Process embeds if script already loaded
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  // Real Instagram post URLs from @hello.beauty.lounge
  const instagramPostUrls = [
    "https://www.instagram.com/reel/DZIrSSOhvBB/?igsh=MjMwcXI2aXdsM2Vt",
    "https://www.instagram.com/p/DY7fxS4lE86/?igsh=dm1xdGI4bW5maTJ3",
    "https://www.instagram.com/p/DXQHOyrj8JS/?igsh=MTZqa24wNG1oNjVpZw==",
    "https://www.instagram.com/reel/DTqhUTRko-q/?igsh=MXQwcWZ4dTMya2Q5ZA==",
    "https://www.instagram.com/reel/DRxfTiTkhNf/?igsh=bmhsZ3M0bDF5cHo2",
    "https://www.instagram.com/reel/DMX8DROxEGg/?igsh=OG50cmFzMm15bDVu",
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2
              className="text-3xl md:text-5xl font-bold text-primary mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Follow Our Journey
            </h2>
            <p className="text-lg text-foreground/70">
              Stay updated with our latest transformations and salon moments
            </p>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white hidden md:flex"
            onClick={() =>
              window.open("https://www.instagram.com/hello.beauty.lounge", "_blank")
            }
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Follow on Instagram
          </Button>
        </div>

        {/* Instagram Embedded Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {instagramPostUrls.map((url, index) => (
            <div
              key={index}
              className="flex justify-center"
              style={{
                minHeight: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
              >
                <a href={url} target="_blank" rel="noreferrer">
                  View this post on Instagram
                </a>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center md:hidden">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            onClick={() =>
              window.open("https://www.instagram.com/hello.beauty.lounge", "_blank")
            }
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Follow on Instagram
          </Button>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 md:p-12 text-center mt-12">
          <h3
            className="text-2xl md:text-3xl font-bold text-primary mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            @hello.beauty.lounge
          </h3>
          <p className="text-foreground/70 mb-6">
            Follow us on Instagram for daily inspiration, transformation reveals, and
            exclusive salon updates. Tag us in your photos for a chance to be featured!
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              window.open("https://www.instagram.com/hello.beauty.lounge", "_blank")
            }
          >
            Visit Our Instagram Profile
          </Button>
        </div>
      </div>
    </section>
  );
}
