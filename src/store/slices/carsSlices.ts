import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "@/utils/axiosInstance";
import { CarProps, FilterProps } from "@/types";

interface CarsState {
  cars: CarProps[];
  loading: boolean;
  error: string | null;
}

const initialState: CarsState = {
  cars: [],
  loading: false,
  error: null,
};


export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (filters: FilterProps, { rejectWithValue }) => {
    console.log("filters", filters)
    try {
      const res = await axios.get(`/cars`, {
        params: {
          manufacturer: filters.manufacturer || "",
          year: filters.year || 2022,
          fuel: filters.fuel  || "",
          limit: filters.limit || 10,
          model: filters.model || "",
        },
      });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch cars");
    }
  }
);

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    clearCars: (state) => {
      state.cars = [];
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action: PayloadAction<CarProps[]>) => {
        state.cars = action.payload;
        state.loading = false;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.cars = [];
      });
  },
});

export const { clearCars } = carsSlice.actions;
export default carsSlice.reducer;
