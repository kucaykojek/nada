import Link from 'next/link';

import { cn } from '@/utils/cn';

import Title from '@/components/Title';
import Links from '@/components/Links';
import Release from '@/components/Release';
import Signature from '@/components/Signature';

import { RELEASES } from '@/constants/releases';
import { PLATFORMS } from '@/constants/links';

export default function Home() {
  const pinnedLinks = PLATFORMS.filter((val) => !!val.pin);

  return (
    <div className="relative flex flex-col justify-end items-center w-screen h-[100dvh]">
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

      <div className="z-10 relative flex flex-col items-center gap-6 p-4 max-w-screen h-full text-center">
        <Title />

        <div className="relative space-y-3 mt-auto">
          <h2 className="tracking-widest">Releases</h2>
          <div className="[&::-webkit-scrollbar]:hidden block pl-4 max-w-screen [-ms-overflow-style:none] overflow-x-auto whitespace-nowrap [scrollbar-width:none]">
            {RELEASES.map((val, idx) => (
              <Link
                key={`release-${idx}`}
                className={cn('inline-block relative')}
                href={`/release/${val.key}`}
                title={val.title}
              >
                <Release release={val} />
              </Link>
            ))}
          </div>
        </div>

        <div className="relative space-y-3">
          <h2 className="tracking-widest">Platforms</h2>
          <div className="flex md:flex-row flex-col items-center gap-4 text-left">
            {pinnedLinks.map((val, idx) => (
              <a
                key={`platform-${idx}`}
                className={cn(
                  'group flex justify-center items-center gap-2 bg-black/20 px-4 py-2 rounded-xl w-full md:w-auto min-h-12 font-normal text-sm tracking-widest transition-all ease-in-out',
                  val.className
                )}
                href={val.href}
                target="_blank"
              >
                <val.icon width={36} height={36} className={!!val.iconHover ? 'group-hover:hidden' : ''} />
                {!!val.iconHover && <val.iconHover width={36} height={36} className="hidden group-hover:block" />}

                <p aria-label={val.label}>{val.longLabel || val.label}</p>
              </a>
            ))}
          </div>
          <Links all={false} />
        </div>

        <Signature />
      </div>
    </div>
  );
}
