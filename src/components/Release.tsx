import Image from 'next/image';

import { cn } from '@/utils/cn';
import type { Release } from '@/constants/releases';

const Release = ({ release }: { release: Release }) => {
  return (
    <div
      className={cn(
        'group relative mr-4 rounded-xl w-28 h-40 overflow-hidden whitespace-normal transition-all ease-in-out cursor-pointer'
      )}
      title={release.title}
    >
      <div className="top-28 left-0 group-hover:-left-16 z-30 absolute flex items-center bg-black -mt-2 px-2 rounded-r-md h-4 font-mono text-[0.5rem] uppercase transition-all ease-in-out">
        {release.type}
      </div>
      {!!release.comingSoon && (
        <div className="top-0 left-0 z-10 absolute flex justify-center items-center bg-white/20 backdrop-blur-[2px] p-2 w-28 h-28 font-black text-neutral-900 uppercase leading-tight">
          COMING SOON
        </div>
      )}
      <div className="relative">
        <Image
          src={release.cover}
          width={200}
          height={200}
          alt={release.title}
          priority
          className="w-28 h-28 group-hover:h-40 object-cover transition-all ease-in-out"
        />
      </div>
      <div className="bottom-0 left-0 z-20 absolute flex flex-wrap justify-center items-center bg-black/20 group-hover:bg-black/80 p-2 w-full h-12 group-hover:h-16 transition-all ease-in-out">
        <h3 className="text-xs line-clamp-2 group-hover:line-clamp-none">{release.title}</h3>
      </div>
    </div>
  );
};

export default Release;
