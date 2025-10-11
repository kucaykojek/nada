import { PLATFORMS, SOCIALS } from '@/constants/links';
import { cn } from '@/utils/cn';

const Links = ({ all = true }: { all?: boolean }) => {
  const links = all ? [...PLATFORMS, ...SOCIALS] : [...PLATFORMS.filter((val) => !val.pin), ...SOCIALS];

  return (
    <div className="relative flex flex-wrap justify-center items-center gap-2">
      {links.map((val, idx) => (
        <a
          key={`link-${idx}`}
          className={cn(
            'flex justify-center items-center hover:bg-white/10 opacity-90 hover:opacity-100 rounded-lg w-10 h-10 hover:scale-110 transition-all ease-in-out'
          )}
          href={val.href}
          title={val.label}
          aria-label={val.label}
          target="_blank"
        >
          <val.icon width={26} height={26} />
        </a>
      ))}
    </div>
  );
};

export default Links;
