import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instantTransferApi, mtmLoginApi } from "./transferPayApi";

export const mtmLogin = createAsyncThunk(
    'mtmLogin',
    async payload => {
      try {
        const response = await mtmLoginApi(payload);
        // console.log(response, 'Response in slice for announcements');
        return response;
      } catch (error) {
        //('error', error);
        throw new Error(error);
      }
    },
  );

export const instantTransfer = createAsyncThunk(
    'instantTransfer',
    async payload => {
      try {
        const response = await instantTransferApi(payload);
        console.log(response, 'Response in slice for announcements');
        return response;
      } catch (error) {
        //('error', error);
        throw new Error(error);
      }
    },
  );

  const initialState = {
    name: 'transferDetails',
    mtmLoginInfoData: [],
    instantTransferInfoData: [],
    instantTransferLoading: false,
    mtmLoading: false,
  };
//   console.log(users,"Users before slies")
  export const trasnferPaySLice = createSlice({
    name: 'transferDetails',
    initialState,
    reducers: {},
  
    extraReducers: (builder) => {
        builder
          .addCase(mtmLogin.pending, (state) => {
            state.mtmLoading = true;
          })
          .addCase(mtmLogin.fulfilled, (state, action) => {
            state.mtmLoginInfoData = action.payload;
            state.mtmLoading = false;
          })
          .addCase(mtmLogin.rejected, (state) => {
            state.mtmLoading = false;
          })
          .addCase(instantTransfer.pending, (state) => {
            state.instantTransferLoading = true;
          })
          .addCase(instantTransfer.fulfilled, (state, action) => {
            console.log(action.payload,"This is users in store")
            state.instantTransferInfoData = action.payload;
            state.instantTransferLoading = false;
          })
          .addCase(instantTransfer.rejected, (state) => {
            state.instantTransferLoading = false;
          });
      },
    },
  );
  
  export default trasnferPaySLice.reducer;
  