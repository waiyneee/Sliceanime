import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

const baseUrl= "https://api.jikan.moe/v4"
 //asynchronous thunks


//  first is upcoming
 export const getPopularAnime= createAsyncThunk(
    "/anime/getPopularAnime",
    async()=>{
        const response=await fetch (`${baseUrl}/top/anime?filter=bypopularity`)
        const data =await response.json();
        return data.data
    }

 )

 export const getAiringAnime =createAsyncThunk(
    "/anime/getAiringAnime" ,
    async()=>{
        const response= await fetch (`${baseUrl}/top/anime?filter=airing`)
        const data = await response.json()
        return data.data
    }
 )

 export const searchAnime = createAsyncThunk(
    "/anime/searchAnime" ,
    async (query)=>{
        const response = await fetch(`${baseUrl}/anime?q=${query}&order_by=popularity&sort=asc&sfw`)
        const data= await response.json()
        return data.data
    }
 )

 export const getAnimePictures = createAsyncThunk(
  'anime/getAnimePictures',
  async (id) => {
    const res = await fetch(`${baseUrl}/characters/${id}/pictures`);
    const data = await res.json();
    return data.data;
  }
);

// ==== INITIAL STATE ====
const initialState = {
  PopularAnime: [],
  airingAnime: [],
  pictures: [],
  searchResults: [],
  loading: false,
  isSearch: false,
  search: '',
};

// ==== SLICE ====
const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
      state.isSearch = !!action.payload;
    },
    clearSearch(state) {
      state.search = '';
      state.searchResults = [];
      state.isSearch = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopularAnime.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPopularAnime.fulfilled, (state, action) => {
        state.PopularAnime = action.payload;
        state.loading = false;
      })

      .addCase(getAiringAnime.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAiringAnime.fulfilled, (state, action) => {
        state.airingAnime = action.payload;
        state.loading = false;
      })

      .addCase(searchAnime.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchAnime.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.loading = false;
        state.isSearch = true;
      })

      .addCase(getAnimePictures.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAnimePictures.fulfilled, (state, action) => {
        state.pictures = action.payload;
        state.loading = false;
      });
  },
});

export const { setSearch, clearSearch } = animeSlice.actions;

export default animeSlice.reducer;