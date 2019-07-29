var playlist = new Object({keys: '2'});

function updatePlaylist(playlist, artistName, SongTitle)
{
  playlist[artistName] = SongTitle
  return playlist
}

function removeFromPlaylist(playlistObject, artistName)
{
  delete playlist.artistName
  return playlist
}