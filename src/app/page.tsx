import { cn } from "@/utils/cn";

import Signature from "@/components/Signature";
import SocialInstagram from "@/components/social/Instagram";
import SocialSpotify from "@/components/social/Spotify";
import SocialTikTok from "@/components/social/TikTok";
import SocialYouTube from "@/components/social/YouTube";

const platforms = [
  {
    label: "Watch on YouTube",
    icon: <SocialYouTube width={30} />,
    href: "https://www.youtube.com/@hellooonada",
    className: "cta-youtube",
  },
  {
    label: "Listen on Spotify",
    icon: <SocialSpotify width={30} />,
    href: "https://open.spotify.com/artist/5XUy3uAlHzD8mUGZDBE9Kw",
    className: "cta-spotify",
  },
];

const socials = [
  {
    label: "Instagram",
    icon: <SocialInstagram width={26} />,
    href: "https://www.instagram.com/hellooonada",
  },
  {
    label: "TikTok",
    icon: <SocialTikTok width={26} />,
    href: "https://www.tiktok.com/@hellooonada",
  },
];

export default function Home() {
  return (
    <div className="relative w-screen h-[100dvh]">
      <video src="/bg.mp4" muted autoPlay loop className="top-0 left-0 fixed w-screen h-[100dvh] object-cover" />
      <div className="top-0 left-0 z-[1] fixed w-screen h-[100dvh] pattern" />
      <div className="z-10 relative flex flex-col justify-end items-center gap-6 p-4 w-screen h-[calc(100dvh-10rem)] text-center">
        <h1 className="font-bold text-2xl tracking-[0.5rem]">Nada Ayu Lestari</h1>
        <div className="flex md:flex-row flex-col items-center gap-4 text-left">
          {platforms.map((val, idx) => (
            <a
              key={`platform-${idx}`}
              className={cn(
                "flex justify-center items-center gap-2 bg-white/10 px-4 py-1 rounded-xl w-full md:w-auto h-12 font-medium transition-all ease-in-out",
                val.className
              )}
              href={val.href}
              target="_blank"
            >
              {val.icon}
              <span aria-label={val.label}>{val.label}</span>
            </a>
          ))}
        </div>
        <div className="relative space-y-2">
          <span className="text-sm">Social Media</span>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {socials.map((val, idx) => (
              <a
                key={`platform-${idx}`}
                className={cn(
                  "flex justify-center items-center hover:bg-white/10 rounded-lg w-10 h-10 transition-all ease-in-out"
                )}
                href={val.href}
                title={val.label}
                target="_blank"
              >
                {val.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-4 left-1/2 z-[2] fixed w-fit -translate-x-1/2">
        <Signature />
      </div>
    </div>
  );
}
