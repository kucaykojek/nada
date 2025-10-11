import Link from 'next/link';
import { Covered_By_Your_Grace } from 'next/font/google';
import { cn } from '@/utils/cn';

const fontTitle = Covered_By_Your_Grace({
  variable: '--font-title',
  weight: '400',
  subsets: ['latin'],
});

const Title = () => {
  return (
    <Link href="/">
      <h1 className={cn(`${fontTitle.className} antialiased`, 'text-2xl tracking-wider')}>Nada Ayu Lestari</h1>
    </Link>
  );
};

export default Title;
