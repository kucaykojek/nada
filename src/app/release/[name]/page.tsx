import Image from 'next/image';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import Title from '@/components/Title';
import Links from '@/components/Links';
import Signature from '@/components/Signature';

import { RELEASES } from '@/constants/releases';

type Props = {
  params: Promise<{ name: string }>;
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

export default async function Release({ params }: Props) {
  const name = (await params)?.name;
  const release = RELEASES.find((val) => val.key === name);

  if (!release) return redirect('/');

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
        className="top-0 left-0 fixed w-screen h-[100dvh] object-cover"
      />
      <div className="top-0 left-0 z-[1] fixed backdrop-blur-[4px] w-screen h-[100dvh] transition-all ease-in-out" />

      <div className="z-10 relative flex flex-col justify-between items-center gap-6 p-4 max-w-screen h-full text-center">
        <Title title={release.title} backTo="/" />

        <div className="relative space-y-3 mt-auto">
          <div className="relative flex flex-col justify-center items-center bg-[#1F1F1F] rounded-2xl w-[100vw-4rem] md:w-[35rem] min-h-40 overflow-hidden">
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
        </div>

        <Links />
        <Signature />
      </div>
    </div>
  );
}
