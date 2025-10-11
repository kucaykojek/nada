import { redirect } from 'next/navigation';

import { RELEASES } from '@/constants/releases';

type Props = {
  params: Promise<{ name: string }>;
};

export default async function PreSavePage({ params }: Props) {
  const name = (await params)?.name;
  const release = RELEASES.find((val) => val.key === name);

  if (!release) return redirect('/');

  const baseUrl = 'https://accounts.spotify.com/authorize';

  const query = new URLSearchParams({
    client_id: process.env.SPOTIFY_CLIENT_ID!,
    response_type: 'code',
    redirect_uri: 'https://www.nadalestari.com/callback/spotify',
    scope: 'user-library-modify',
    state: release.key,
  });

  return redirect(`${baseUrl}?${query.toString()}`);
}
