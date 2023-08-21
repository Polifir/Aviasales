import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  idSesion: '',
  tickets: [],
  stop: false,
};

export const featchIdSession = createAsyncThunk('fetchIdSession', async () => {
  const res = axios
    .get('https://aviasales-test-api.kata.academy/search')
    .then((resp) => {
      return resp.data.searchId;
    });
  return res;
});

export const featchTicketsGet = createAsyncThunk(
  'featchTicketsGet',
  async (id) => {
    const ticketsArr = axios
      .get(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
      .then((resp) => {
        return resp.data;
      });
    return ticketsArr;
  }
);

export const TicketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(featchIdSession.fulfilled, (state, action) => {
      state.idSesion = action.payload;
      state.tickets = [];
    });
    builder.addCase(featchIdSession.rejected, () => {
      console.log('error search id session');
    });
    builder.addCase(featchTicketsGet.fulfilled, (state, action) => {
      // while (!action.payload.stop) {
      // }
      state.tickets.push(...action.payload.tickets);
      console.log(action.payload);

      state.stop = action.payload.stop;
    });
  },
});

//  =
//       const ticketsArr = await axios
//         .get(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
//         .then((resp) => {
//           return resp;
//         });
//       console.log(ticketsArr);
//     };
// });

// export const { } = TicketsSlice;
export default TicketsSlice.reducer;
