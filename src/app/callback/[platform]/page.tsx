import { redirect } from 'next/navigation';

import { RELEASES } from '@/constants/releases';
import { exchangeCodeForToken, saveAlbumToLibrary } from '@/utils/spotify';

type Props = {
  params: Promise<{ platform: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function PreSavePage({ params, searchParams }: Props) {
  const platform = (await params)?.platform;

  if (platform === 'spotify') {
    const code = (await searchParams)?.code;
    const state = (await searchParams)?.state;

    const release = RELEASES.find((val) => val.key === state);

    if (!code || !release) return redirect('/');

    const tokenData = await exchangeCodeForToken(`${code}`);

    if (!tokenData?.access_token || !release?.spotifyAlbumId) return redirect(`/release/${release.key}`);

    await saveAlbumToLibrary(tokenData?.access_token, release?.spotifyAlbumId);

    return redirect(`/release/${release.key}?presaved=true`);
  }

  return redirect('/');
}
