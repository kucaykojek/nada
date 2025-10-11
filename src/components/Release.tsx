import Image from 'next/image';

import { cn } from '@/utils/cn';
import type { Release } from '@/constants/releases';

const Release = ({ release }: { release: Release }) => {
  return (
    <div
      className={cn(
        'group relative bg-black/20 hover:bg-black/80 mr-4 rounded-xl w-28 h-44 overflow-hidden whitespace-normal transition-all ease-in-out'
      )}
      title={release.title}
    >
      <div className="top-28 left-0 z-20 absolute flex items-center bg-black -mt-2 px-2 rounded-r-md h-4 font-mono text-[0.5rem] uppercase">
        {release.type}
      </div>
      {!!release.comingSoon && (
        <div className="top-0 left-0 z-10 absolute flex justify-center items-center bg-white/20 backdrop-blur-[2px] p-2 w-28 h-28 font-black text-neutral-900 uppercase leading-tight">
          COMING SOON
        </div>
      )}
      <div className="w-28 h-28 overflow-hidden">
        <Image
          src={release.cover}
          width={150}
          height={150}
          alt={release.title}
          priority
          className="object-cover group-hover:scale-110 transition-all ease-in-out"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center p-2 w-full h-16">
        <h3 className="text-xs line-clamp-2">{release.title}</h3>
      </div>
    </div>
  );
};

export default Release;
