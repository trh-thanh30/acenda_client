import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { wishlistApi } from "../services/wishlist.api";

interface IWishlist {
  id: string;
  tour: {
    id: string;

    images: string[];
    name: string;
    description: string;
    highlights: string[];
    planDetails: string;
    itinerary: string;
    durationDays: number;
    priceAdult: number;
    priceChild: number;
    availableSlots: number;
    travelCostDetails: string;
    address: string;
  };
}
interface IWishlistState {
  items: IWishlist[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IWishlistState = {
  items: [],
  isLoading: false,
  error: null,
};
// THUNK
export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (_, { rejectWithValue }) => {
    try {
      const res = await wishlistApi.getAllWishlist();
      return res.data as IWishlist[];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Error fetching wishlist"
      );
    }
  }
);
export const toggleWishlist = createAsyncThunk(
  "wishlist/toggle",
  async (tourId: string, thunkAPI) => {
    try {
      await wishlistApi.toggleWishlist(tourId);
      // after that add it to wishlist
      thunkAPI.dispatch(fetchWishlist());
    } catch (error) {
      console.log(error);
    }
  }
);

// SLICE
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWishlist.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchWishlist.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchWishlist.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoading = false;
    });
  },
});
export default wishlistSlice.reducer;
