import Link from 'next/link';
import { Covered_By_Your_Grace } from 'next/font/google';

import ArrowLeft from '@/assets/arrow-left.svg';
import { cn } from '@/utils/cn';

const fontTitle = Covered_By_Your_Grace({
  variable: '--font-title',
  weight: '400',
  subsets: ['latin'],
});

const Title = ({ title = 'Nada Ayu Lestari', backTo }: { title?: string; backTo?: string }) => {
  return !!backTo ? (
    <div className="flex items-center gap-4">
      <Link href={backTo} className="cursor-pointer">
        <ArrowLeft width={20} height={20} />
      </Link>
      <h1 className={cn(`${fontTitle.className} antialiased`, 'text-2xl tracking-wider')}>{title}</h1>
    </div>
  ) : (
    <Link href="/" className="flex items-center gap-4 cursor-pointer">
      <h1 className={cn(`${fontTitle.className} antialiased`, 'text-2xl tracking-wider')}>{title}</h1>
    </Link>
  );
};

export default Title;
