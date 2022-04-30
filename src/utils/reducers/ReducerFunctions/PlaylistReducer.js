export const PlaylistReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_ALL_PLAYLISTS_LOADING":
      return { ...state, getAllplaylistsLoading: true };

    case "ADD_NEW_PLAYLIST_LOADING":
      return { ...state, addNewplaylistLoading: true };

    case "REMOVE_PLAYLIST_LOADING":
      return { ...state, removeplaylistLoading: true };

    case "ADD_VIDEO_TO_PLAYLIST_LOADING":
      return { ...state, addVideoToplaylistLoading: true };

    case "REMOVE_VIDEO_FROM_PLAYLIST_LOADING":
      return { ...state, removeVideoFromPlaylistLoading: true };

    case "GET_VIDEOS_FROM_PLAYLIST_LOADING":
      return { ...state, playlistLoading: true };

    case "GET_ALL_PLAYLISTS":
      return { ...state, getAllplaylistsLoading: false, playlists: payload };

    case "REMOVE_PLAYLIST":
      return { ...state, removeplaylistLoading: false, playlistNames: payload };

    case "ADD_NEW_PLAYLIST":
      return { ...state, addNewplaylistLoading: false, playlistNames: payload };

    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...state,
        addVideoToplaylistLoading: false,
        updatedplaylist: payload,
      };

    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        removeVideoFromPlaylistLoading: false,
        updatedplaylist: payload,
      };

    case "GET_VIDEOS_FROM_PLAYLIST":
      return { ...state, playlistLoading: false, playlist: payload };
  }
};
