export function getPlatformStreamUrl(platform: string, albumId?: string) {
  if (!albumId) return '';

  switch (platform) {
    case 'youtube-music':
      return `https://music.youtube.com/playlist?list=${albumId}`;
    case 'spotify':
      return `https://open.spotify.com/album/${albumId}`;
    default:
      return '';
  }
}
