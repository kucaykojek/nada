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
  desc?: string;
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
    desc: '"Bayang" adalah album berisi sembilan lagu penuh emosi — Tak Pernah Satu, Endless Road, Shadows In The Glow, Tempatku Pulang, Repentance, Merasa Sendirian, Bersama Sahabat, Falling Apart, dan Lenyap. Album ini menggambarkan perjalanan batin di antara terang dan gelap, tentang kehilangan, penyesalan, persahabatan, dan usaha menemukan diri di tengah bayangan kehidupan.',
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
    desc: '"Langit" adalah EP yang merangkai tiga fase kehidupan dan cinta — dari harapan, kehilangan arah, hingga kesepian yang sunyi. Melalui lagu Bekukan Selamanya, Di Mana Kita?, dan Tanpa Bintang, kisah ini menggambarkan perjalanan perasaan manusia dari pagi hingga malam, dari awal hingga akhir.',
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
    desc: '"姿を消した (Sugata o Keshita)" — versi Jepang dari lagu "Lenyap" karya Nada — menggambarkan kehilangan yang tiba-tiba dan kebingungan yang tertinggal. Melalui lirik yang berulang dan getir, lagu ini menyuarakan perasaan ditinggalkan tanpa penjelasan, di antara realita dan kebohongan yang perlahan terungkap.',
  },
  {
    key: 'jauh-di-dalam-diri',
    title: 'Jauh Di Dalam Diri feat. uRAPupu',
    type: 'single',
    year: 2025,
    cover: '/images/cover-jauh-di-dalam-diri.webp',
    bg: '/images/bg-jauh-di-dalam-diri.webp',
    bgColor: '#121212',
    spotifyEmbedSource: 'https://open.spotify.com/embed/album/3TtZ4zcInGVzHovU5aLmKN?utm_source=generator&theme=0',
    desc: '"Jauh Di Dalam Diri" adalah lagu reflektif tentang luka masa lalu, rasa minder, dan keinginan tulus untuk dicintai. Dengan lirik yang jujur dan emosional, lagu ini menggambarkan perjuangan seseorang mencari makna dan harapan di tengah kehidupan yang penuh retak.',
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
    desc: '"Rindu" adalah lagu tentang cinta yang tak terhapus oleh jarak dan waktu. Dengan lirik puitis dan penuh emosi, lagu ini menggambarkan kerinduan mendalam yang melintasi langit, menembus sunyi, dan berharap bertemu kembali dalam pelukan abadi.',
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
    desc: '"Derau" adalah EP yang merekam keheningan setelah kehilangan — tentang gema suara yang tersisa, ingatan yang tak hilang, dan usaha menemukan pulang di antara riuh yang memudar. Sebuah perjalanan sunyi yang jujur dan penuh makna.',
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
    desc: '"Di Negeri Ini" adalah lagu tentang ketimpangan dan perjuangan suara rakyat di tengah kuasa yang menutup mata. Dengan lirik lugas dan penuh makna, lagu ini menjadi cermin sosial tentang keadilan yang timpang, harapan yang terus dilawan, dan keberanian untuk tetap bersuara di tengah kebisuan.',
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
  //   desc: '"Bara Beku" adalah EP dua bab tentang cinta yang membakar dan membeku. Melalui lagu "Bara" dan "Beku", kisah ini menggambarkan hangatnya hasrat yang perlahan mengikis diri, hingga berubah menjadi sunyi dan dingin yang membekukan hati. Sebuah perjalanan emosional antara nyala dan hening, antara api dan es.',
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
  //   desc: '"Katanya" adalah lagu bernada satir tentang cara orang membenarkan tindakannya atas nama kebahagiaan. Dengan lirik yang repetitif dan jenaka, lagu ini menyoroti ego, kebebasan semu, dan ironi di balik kalimat populer: "yang penting bahagia, katanya."',
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
  //   desc: '"Arunika" adalah album perjalanan dari gelap menuju cahaya — tentang hidup, kehilangan, dan harapan yang tak pernah padam. Dalam sembilan lagu seperti Morning Comes, Scroll Tanpa Henti, Selamanya, Persimpangan, Fragmen Diri, Hanya Sejenak, Luka Yang Indah, Harapan, dan Ruang Lama, album ini menggambarkan pencarian arti diri di tengah perubahan dan waktu yang terus berjalan.',
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
  //   desc: '"Midnight Grocery" adalah EP dengan sentuhan electronic yang berpadu harmonis dengan karakter rock khas Nada. Melalui tiga lagu — 2AM Coffee, Youth Life, dan Taxi Windows — EP ini menggambarkan potret kehidupan modern: pahit dan manis, sepi dan hangat, sederhana namun membekas lama.',
  //   comingSoon: {
  //     releaseDate: '14 Feb 2025',
  //   },
  // },
];
