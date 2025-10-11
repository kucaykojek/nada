export type Release = {
  key: string;
  title: string;
  type: 'single' | 'ep' | 'album';
  year: number;
  cover: string;
  bg: string;
  bgColor: string;
  spotifyEmbedSource?: string;
  comingSoon?: {
    releaseDate: string;
  };
};

export const RELEASES: Release[] = [
  {
    key: 'bayang',
    title: 'Bayang',
    type: 'album',
    year: 2025,
    cover: '/images/cover-bayang.webp',
    bg: '/images/bg-bayang.webp',
    bgColor: '#121212',
    spotifyEmbedSource: 'https://open.spotify.com/embed/album/0QxMqSDY6l4eBmj7RI4zts?utm_source=generator&theme=0',
  },
  {
    key: 'langit',
    title: 'Langit',
    type: 'ep',
    year: 2025,
    cover: '/images/cover-langit.webp',
    bg: '/images/bg-langit.webp',
    bgColor: '#121212',
    spotifyEmbedSource: 'https://open.spotify.com/embed/album/4dHc8XdqwkIRR3TtUOwatZ?utm_source=generator&theme=0',
  },
  {
    key: 'lenyap-jp',
    title: '姿を消した (Lenyap - JP Version)',
    type: 'single',
    year: 2025,
    cover: '/images/cover-lenyap-jp.webp',
    bg: '/images/bg-lenyap-jp.webp',
    bgColor: '#121212',
    spotifyEmbedSource: 'https://open.spotify.com/embed/album/7JbIFMWB6lGj3x11lCHrm4?utm_source=generator&theme=0',
  },
  {
    key: 'jauh-di-dalam-diri',
    title: 'Jauh Di Dalam Diri feat. uRAPupu',
    type: 'single',
    year: 2025,
    cover: '/images/cover-jddd.webp',
    bg: '/images/bg-jddd.webp',
    bgColor: '#121212',
    spotifyEmbedSource: 'https://open.spotify.com/embed/album/3TtZ4zcInGVzHovU5aLmKN?utm_source=generator&theme=0',
  },
  {
    key: 'rindu',
    title: 'Rindu feat. Irama Arga',
    type: 'single',
    year: 2025,
    cover: '/images/cover-rindu.webp',
    bg: '/images/bg-rindu.webp',
    bgColor: '#121212',
    spotifyEmbedSource: 'https://open.spotify.com/embed/album/4GEkHEuCudkli7xUDfxjXk?utm_source=generator&theme=0',
  },
  {
    key: 'derau',
    title: 'Derau',
    type: 'ep',
    year: 2025,
    cover: '/images/cover-derau.webp',
    bg: '/images/bg-derau.webp',
    bgColor: '#121212',
    // spotifyEmbedSource: 'https://open.spotify.com/embed/album/4GEkHEuCudkli7xUDfxjXk?utm_source=generator&theme=0',
    comingSoon: {
      releaseDate: '12 Oct 2025',
    },
  },
  {
    key: 'di-negeri-ini',
    title: 'Di Negeri Ini',
    type: 'single',
    year: 2025,
    cover: '/images/cover-di-negeri-ini.webp',
    bg: '/images/bg-di-negeri-ini.webp',
    bgColor: '#121212',
    // spotifyEmbedSource: 'https://open.spotify.com/embed/album/4GEkHEuCudkli7xUDfxjXk?utm_source=generator&theme=0',
    comingSoon: {
      releaseDate: '28 Oct 2025',
    },
  },
  // {
  //   key: 'bara-beku',
  //   title: 'Bara Beku',
  //   type: 'ep',
  //   year: 2025,
  //   cover: '/images/cover-bara-beku.webp',
  //   bg: '/images/bg-bara-beku.webp',
  //   bgColor: '#121212',
  //   // spotifyEmbedSource: 'https://open.spotify.com/embed/album/4GEkHEuCudkli7xUDfxjXk?utm_source=generator&theme=0',
  //   comingSoon: {
  //     releaseDate: '16 Nov 2025',
  //   },
  // },
  // {
  //   key: 'katanya',
  //   title: 'Katanya',
  //   type: 'single',
  //   year: 2025,
  //   cover: '/images/cover-katanya.webp',
  //   bg: '/images/bg-katanya.webp',
  //   bgColor: '#121212',
  //   // spotifyEmbedSource: 'https://open.spotify.com/embed/album/4GEkHEuCudkli7xUDfxjXk?utm_source=generator&theme=0',
  //   comingSoon: {
  //     releaseDate: '9 Dec 2025',
  //   },
  // },
  // {
  //   key: 'arunika',
  //   title: 'Arunika',
  //   type: 'album',
  //   year: 2025,
  //   cover: '/images/cover-arunika.webp',
  //   bg: '/images/bg-arunika.webp',
  //   bgColor: '#121212',
  //   // spotifyEmbedSource: 'https://open.spotify.com/embed/album/4GEkHEuCudkli7xUDfxjXk?utm_source=generator&theme=0',
  //   comingSoon: {
  //     releaseDate: '23 Dec 2025',
  //   },
  // },
  // {
  //   key: 'midnight-grocery',
  //   title: 'Midnight Grocery',
  //   type: 'album',
  //   year: 2026,
  //   cover: '/images/cover-midnight-grocery.webp',
  //   bg: '/images/bg-midnight-grocery.webp',
  //   bgColor: '#121212',
  //   // spotifyEmbedSource: 'https://open.spotify.com/embed/album/4GEkHEuCudkli7xUDfxjXk?utm_source=generator&theme=0',
  //   comingSoon: {
  //     releaseDate: '14 Feb 2025',
  //   },
  // },
];
