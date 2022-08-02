import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllPlaylistsService,
  addNewPlaylistService,
  removePlaylistService,
  getVideosFromPlaylistService,
  addVideoToPlaylistService,
  removeVideoFromPlaylistService,
} from "../Services/PlaylistService";

const initialState = {
  playlists: [],
  updatedplaylist: {},
  playlist: [],
  getAllplaylistsLoading: false,
  addNewplaylistLoading: false,
  removeplaylistLoading: false,
  addVideoToplaylistLoading: false,
  removeVideoFromPlaylistLoading: false,
  playlistLoading: false,
  playlistError: null,
  videosError: null,
};

const getAllPlaylists = createAsyncThunk(
  "playlist/getAllPlaylists",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllPlaylistsService();
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addNewPlaylist = createAsyncThunk(
  "playlist/addNewPlaylist",
  async (playlist, { rejectWithValue }) => {
    try {
      const response = await addNewPlaylistService(playlist);
      if (response.status === 201) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const removePlaylist = createAsyncThunk(
  "playlist/removePlaylist",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await removePlaylistService(_id);
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getVideosFromPlaylist = createAsyncThunk(
  "playlist/getVideosFromPlaylist",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await getVideosFromPlaylistService(_id);
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addVideoToPlaylist = createAsyncThunk(
  "playlist/addVideoToPlaylist",
  async (data, { rejectWithValue }) => {
    const { _id, video } = data;
    try {
      const response = await addVideoToPlaylistService(_id, video);
      if (response.status === 201) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const removeVideoFromPlaylist = createAsyncThunk(
  "playlist/removeVideoFromPlaylist",
  async (data, { rejectWithValue }) => {
    const { playlist_id, video_id } = data;
    try {
      const response = await removeVideoFromPlaylistService(
        playlist_id,
        video_id
      );
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    logoutPlaylist: (state, action) => {
      state.playlists = [];
      state.updatedplaylist = {};
      state.playlist = [];
    },
  },
  extraReducers: {
    [getAllPlaylists.pending]: (state, action) => {
      state.getAllplaylistsLoading = true;
    },
    [getAllPlaylists.fulfilled]: (state, action) => {
      state.getAllplaylistsLoading = false;
      state.playlists = action?.payload?.data?.playlists;
    },
    [getAllPlaylists.rejected]: (state, action) => {
      console.error(action.payload);
    },

    [addNewPlaylist.pending]: (state, action) => {
      state.addNewplaylistLoading = true;
    },
    [addNewPlaylist.fulfilled]: (state, action) => {
      state.addNewplaylistLoading = false;
      state.playlistNames = action?.payload?.data?.playlists;
    },
    [addNewPlaylist.rejected]: (state, action) => {
      console.error(action.payload);
    },

    [removePlaylist.pending]: (state, action) => {
      state.removeplaylistLoading = true;
    },
    [removePlaylist.fulfilled]: (state, action) => {
      state.removeplaylistLoading = false;
      state.playlistNames = action?.payload?.data?.playlists;
    },
    [removePlaylist.rejected]: (state, action) => {
      console.error(action.payload);
    },

    [getVideosFromPlaylist.pending]: (state, action) => {
      state.playlistLoading = true;
    },
    [getVideosFromPlaylist.fulfilled]: (state, action) => {
      state.playlistLoading = false;
      state.playlist = action?.payload?.data?.playlist;
    },
    [getVideosFromPlaylist.rejected]: (state, action) => {
      console.error(action.payload);
    },

    [addVideoToPlaylist.pending]: (state, action) => {
      state.addVideoToplaylistLoading = true;
    },
    [addVideoToPlaylist.fulfilled]: (state, action) => {
      state.addVideoToplaylistLoading = false;
      state.updatedplaylist = action?.payload?.data?.playlist;
    },
    [addVideoToPlaylist.rejected]: (state, action) => {
      console.error(action.payload);
    },

    [removeVideoFromPlaylist.pending]: (state, action) => {
      state.removeVideoFromPlaylistLoading = true;
    },
    [removeVideoFromPlaylist.fulfilled]: (state, action) => {
      state.removeVideoFromPlaylistLoading = false;
      state.updatedplaylist = action?.payload?.data?.playlist;
    },
    [removeVideoFromPlaylist.rejected]: (state, action) => {
      console.error(action.payload);
    },
  },
});

export const { logoutPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
export {
  getAllPlaylists,
  addNewPlaylist,
  removePlaylist,
  getVideosFromPlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
};
