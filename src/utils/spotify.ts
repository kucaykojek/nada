export async function exchangeCodeForToken(code: string) {
  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', 'https://www.nadalestari.com/callback/spotify');
  params.append('client_id', process.env.SPOTIFY_CLIENT_ID!);
  params.append('client_secret', process.env.SPOTIFY_CLIENT_SECRET!);

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  });

  return res.json();
}

export async function saveAlbumToLibrary(token: string, albumId: string) {
  return fetch(`https://api.spotify.com/v1/me/albums?ids=${albumId}`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}` },
  });
}
