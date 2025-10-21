import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import Title from '@/components/Title';
import Links from '@/components/Links';
import Signature from '@/components/Signature';

import Spotify from '@/assets/icon/spotify.svg';
import SpotifyWhite from '@/assets/icon/spotify-white.svg';

import { PlatformKey, RELEASES } from '@/constants/releases';
import { PLATFORMS } from '@/constants/links';
import { cn } from '@/utils/cn';
import { getPlatformStreamUrl } from '@/utils/getter';

type Props = {
  params: Promise<{ name: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = (await params).name;
  const release = RELEASES.find((val) => val.key === name);

  if (!release) return { title: 'Nada Ayu Lestari' };

  return {
    title: `Nada Ayu Lestari - ${release.title}`,
    description: release.desc,
    openGraph: {
      images: [release.cover],
    },
  };
}

export default async function ReleasePage({ params, searchParams }: Props) {
  const name = (await params)?.name;
  const release = RELEASES.find((val) => val.key === name);

  if (!release || (!!release && !(!!release.comingSoon || !!release.spotify?.albumId))) return redirect('/');

  const isPresaved = (await searchParams)?.presaved === 'true';
  const isHasSpotify = !!release?.spotify?.albumId;
  const isHasYoutubeMusic = !!release?.['youtube-music']?.albumId;
  const excludeLinks = [...(isHasSpotify ? ['spotify'] : []), ...(isHasYoutubeMusic ? ['youtube-music'] : [])];
  const streamLinks = PLATFORMS.filter((val) => excludeLinks.includes(val.key));

  return (
    <div
      className="relative flex flex-col justify-end items-center w-screen h-[100dvh]"
      style={{
        background: release.bgColor,
      }}
    >
      <Image
        src={release.bg}
        fill
        priority
        alt={release.title}
        title={release.title}
        className="top-0 left-0 fixed w-screen h-[100dvh] object-cover"
      />
      <div className="top-0 left-0 z-[1] fixed backdrop-blur-[4px] w-screen h-[100dvh] transition-all ease-in-out" />

      <div className="z-10 relative flex flex-col justify-between items-center gap-6 p-4 max-w-screen h-full text-center">
        <Title title={release.title} backTo="/" />

        <div className="relative space-y-3 mt-auto">
          <div className="relative flex flex-col justify-center items-center bg-[#1F1F1F] rounded-2xl w-[100vw-4rem] md:w-[35rem] min-h-40 overflow-hidden">
            {!!release.comingSoon ? (
              <div className="flex flex-col justify-center items-center p-4 w-full h-full">
                <div className="font-black text-3xl uppercase tracking-widest">COMING SOON</div>
                <div className="text-xl uppercase tracking-widest">{release.comingSoon?.releaseDate}</div>
                {!!release.spotify?.albumId && (
                  <div className="mt-6 mb-2">
                    {isPresaved ? (
                      <div
                        className="flex justify-center items-center gap-2 bg-black px-4 py-1 rounded-xl w-full md:w-auto min-h-10 font-normal text-[#1ED760] text-xs tracking-widest"
                        title={release.title}
                      >
                        <p aria-label="Success! Pre-Saved">
                          Success! Pre-Saved on <strong>Spotify</strong>. Thank You 🎉
                        </p>
                      </div>
                    ) : (
                      <Link
                        className="group flex justify-center items-center gap-2 bg-black hover:bg-[#1ED760] px-4 py-2 rounded-xl w-full md:w-auto min-h-10 font-normal text-sm tracking-widest transition-all ease-in-out"
                        href={`/presave/${release.key}`}
                        title={release.title}
                      >
                        <Spotify width={30} height={30} className="group-hover:hidden" />
                        <SpotifyWhite width={30} height={30} className="hidden group-hover:block" />

                        <p aria-label="Pre-Save on Spotify">Pre-Save on Spotify</p>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <iframe
                data-testid="embed-iframe"
                src={`https://open.spotify.com/embed/album/${release.spotify?.albumId}?utm_source=generator&theme=0`}
                width="100%"
                height={release.type === 'single' ? 152 : 352}
                allowFullScreen={false}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            )}
          </div>
        </div>

        {streamLinks.length > 0 && (
          <div className="relative space-y-3">
            <h2 className="tracking-widest">Listen &ldquo;{release.title}&rdquo; on</h2>
            <div className="flex md:flex-row flex-col items-center gap-4 text-left">
              {streamLinks.map((val, idx) => {
                const platformKey = val.key as PlatformKey;
                const platformData = release?.[platformKey];

                return (
                  <a
                    key={`stream-on-${idx}`}
                    className={cn(
                      'group flex justify-center items-center gap-2 bg-black/20 px-4 py-2 rounded-xl w-full md:w-auto min-h-12 font-normal text-sm tracking-widest transition-all ease-in-out',
                      val.className
                    )}
                    href={getPlatformStreamUrl(platformKey, platformData?.albumId)}
                    target="_blank"
                  >
                    <val.icon width={36} height={36} className={!!val.iconHover ? 'group-hover:hidden' : ''} />
                    {!!val.iconHover && <val.iconHover width={36} height={36} className="hidden group-hover:block" />}
                    <p aria-label={val.label}>{val.longLabel || val.label}</p>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        <div className="relative space-y-3">
          <h2 className="tracking-widest">Links</h2>
          <div className="flex md:flex-row flex-col items-center gap-4 text-left">
            <Links excludes={excludeLinks} />
          </div>
        </div>

        <Signature />
      </div>
    </div>
  );
}
