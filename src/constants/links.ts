import Instagram from '@/assets/icon/instagram.svg';
import Spotify from '@/assets/icon/spotify.svg';
import SpotifyWhite from '@/assets/icon/spotify-white.svg';
import TikTok from '@/assets/icon/tiktok.svg';
import YouTube from '@/assets/icon/youtube.svg';
import YouTubeWhite from '@/assets/icon/youtube-white.svg';
import YouTubeMusic from '@/assets/icon/youtube-music.svg';
import AppleMusic from '@/assets/icon/apple-music.svg';
import AmazonMusic from '@/assets/icon/amazon-music.svg';
import SoundCloud from '@/assets/icon/soundcloud.svg';

export const PLATFORMS = [
  {
    key: 'youtube',
    longLabel: 'Watch on YouTube',
    label: 'YouTube',
    icon: YouTube,
    iconHover: YouTubeWhite,
    href: 'https://www.youtube.com/@hellooonada',
    className: 'cta-youtube',
    pin: true,
  },
  {
    key: 'spotify',
    longLabel: 'Listen on Spotify',
    label: 'Spotify',
    icon: Spotify,
    iconHover: SpotifyWhite,
    href: 'https://open.spotify.com/artist/5XUy3uAlHzD8mUGZDBE9Kw',
    className: 'cta-spotify',
    pin: true,
  },
  {
    key: 'youtube-music',
    longLabel: 'Listen on YT Music',
    label: 'YouTube Music',
    icon: YouTubeMusic,
    href: 'https://music.youtube.com/channel/UCIl58vh0AgzcOG22fv64WKg',
    className: 'cta-youtube',
  },
  {
    key: 'apple-music',
    label: 'Apple Music',
    icon: AppleMusic,
    href: 'https://music.apple.com/artist/nada-ayu-lestari/1838862994',
  },
  {
    key: 'amazon-music',
    label: 'Amazon Music',
    icon: AmazonMusic,
    href: 'https://music.amazon.com/artists/B0FQ7XWKXD',
  },
  {
    key: 'soundcloud',
    label: 'SoundCloud',
    icon: SoundCloud,
    href: 'https://soundcloud.com/nada-ayu-lestari',
  },
];

export const SOCIALS = [
  {
    key: 'instagram',
    label: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/hellooonada',
  },
  {
    key: 'tiktok',
    label: 'TikTok',
    icon: TikTok,
    href: 'https://www.tiktok.com/@hellooonada',
  },
];
