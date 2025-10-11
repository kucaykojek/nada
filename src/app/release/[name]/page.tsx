import Image from 'next/image';
import { redirect } from 'next/navigation';

import Title from '@/components/Title';
import Links from '@/components/Links';
import Signature from '@/components/Signature';

import { RELEASES } from '@/constants/releases';

export default async function Release({ params }: { params: { name: string } }) {
  const name = (await params)?.name;
  const release = RELEASES.find((val) => val.key === name);

  if (!release) return redirect('/');

  return (
    <div
      className="relative flex flex-col justify-end items-center pb-40 w-screen h-[100dvh]"
      style={{
        background: release.bgColor,
      }}
    >
      <Image
        src={release.bg}
        fill
        priority
        alt={release.title}
        className="top-0 left-0 fixed w-screen h-[100dvh] object-cover"
      />
      <div className="top-0 left-0 z-[1] fixed backdrop-blur-[4px] w-screen h-[100dvh] transition-all ease-in-out" />
      <div className="z-10 relative flex flex-col justify-end items-center gap-6 p-4 max-w-screen text-center">
        <Title />

        <div className="bg-[#1F1F1F] rounded-2xl w-[100vw-4rem] md:w-[35rem] min-h-40 overflow-hidden">
          {release.spotifyEmbedSource && (
            <iframe
              data-testid="embed-iframe"
              src={release.spotifyEmbedSource}
              width="100%"
              height={release.type === 'single' ? 152 : 352}
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          )}

          {!!release.comingSoon && (
            <div className="flex flex-col justify-center items-center p-4 w-full h-full uppercase">
              <div className="font-black text-3xl tracking-widest">COMING SOON</div>
              <div className="text-xl tracking-widest">{release.comingSoon?.releaseDate}</div>
            </div>
          )}
        </div>

        <Links />
      </div>
      <div className="bottom-4 left-1/2 z-[2] fixed w-fit -translate-x-1/2">
        <Signature />
      </div>
    </div>
  );
}
