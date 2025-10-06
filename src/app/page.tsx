'use client';

import { useState } from 'react';

import { cn } from '@/utils/cn';

import Signature from '@/components/Signature';

import SocialInstagram from '@/assets/icon/instagram.svg';
import SocialSpotify from '@/assets/icon/spotify.svg';
import SocialSpotifyWhite from '@/assets/icon/spotify-white.svg';
import SocialTikTok from '@/assets/icon/tiktok.svg';
import SocialYouTube from '@/assets/icon/youtube.svg';
import SocialYouTubeWhite from '@/assets/icon/youtube-white.svg';
import SocialYouTubeMusic from '@/assets/icon/youtube-music.svg';
import SocialAppleMusic from '@/assets/icon/apple-music.svg';
import SocialAmazonMusic from '@/assets/icon/amazon-music.svg';
import SocialSoundCloud from '@/assets/icon/soundcloud.svg';

const platforms = [
  {
    key: 'youtube',
    label: 'Watch on YouTube',
    icon: <SocialYouTube width={36} height={36} />,
    iconHover: <SocialYouTubeWhite width={36} height={36} />,
    href: 'https://www.youtube.com/@hellooonada',
    className: 'cta-youtube',
  },
  {
    key: 'spotify',
    label: 'Listen on Spotify',
    icon: <SocialSpotify width={36} height={36} />,
    iconHover: <SocialSpotifyWhite width={36} height={36} />,
    href: 'https://open.spotify.com/artist/5XUy3uAlHzD8mUGZDBE9Kw',
    className: 'cta-spotify',
  },
];

const socials = [
  {
    key: 'youtube-music',
    label: 'YouTube Music',
    icon: <SocialYouTubeMusic width={32} height={32} />,
    iconHover: <SocialYouTubeMusic width={32} height={32} />,
    href: 'https://music.youtube.com/channel/UCIl58vh0AgzcOG22fv64WKg',
  },
  {
    key: 'apple-music',
    label: 'Apple Music',
    icon: <SocialAppleMusic width={32} height={32} />,
    href: 'https://music.apple.com/artist/nada-ayu-lestari/1838862994',
  },
  {
    key: 'amazon-music',
    label: 'Amazon Music',
    icon: <SocialAmazonMusic width={32} height={32} />,
    href: 'https://music.amazon.com/artists/B0FQ7XWKXD',
  },
  {
    key: 'soundcloud',
    label: 'SoundCloud',
    icon: <SocialSoundCloud width={32} height={32} />,
    href: 'https://soundcloud.com/nada-ayu-lestari',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    icon: <SocialInstagram width={32} height={32} />,
    href: 'https://www.instagram.com/hellooonada',
  },
  {
    key: 'tiktok',
    label: 'TikTok',
    icon: <SocialTikTok width={32} height={32} />,
    href: 'https://www.tiktok.com/@hellooonada',
  },
];

export default function Home() {
  const [platformActive, setPlatformActive] = useState('');

  return (
    <div className="relative flex flex-col justify-end items-center pb-40 w-screen h-[100dvh]">
      <video
        muted
        autoPlay
        loop
        playsInline
        controls={false}
        crossOrigin="anonymous"
        className="top-0 left-0 fixed w-screen h-[100dvh] object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="top-0 left-0 z-[1] fixed backdrop-blur-[2px] w-screen h-[100dvh] transition-all ease-in-out" />
      <div className="z-10 relative flex flex-col justify-end items-center gap-6 p-4 text-center">
        <h1 className="text-2xl tracking-wider">Nada Ayu Lestari</h1>
        <div className="flex md:flex-row flex-col items-center gap-4 text-left">
          {platforms.map((val, idx) => (
            <a
              key={`platform-${idx}`}
              className={cn(
                'flex justify-center items-center gap-2 bg-black/20 px-4 py-2 rounded-xl w-full md:w-auto min-h-12 font-bold tracking-widest transition-all ease-in-out',
                val.className
              )}
              href={val.href}
              target="_blank"
              onMouseEnter={() => setPlatformActive(val.key)}
              onMouseLeave={() => setPlatformActive('')}
            >
              {val.key === platformActive ? val.iconHover : val.icon}
              <span aria-label={val.label}>{val.label}</span>
            </a>
          ))}
        </div>
        <div className="relative space-y-2 !mt-8">
          <div className="text-sm tracking-widest">Other Platforms</div>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {socials.map((val, idx) => (
              <a
                key={`platform-${idx}`}
                className={cn(
                  'flex justify-center items-center hover:bg-white/10 opacity-90 hover:opacity-100 rounded-lg w-10 h-10 hover:scale-110 transition-all ease-in-out'
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
