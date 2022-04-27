import { createSlice } from "@reduxjs/toolkit";
import { ApiModule } from "../api/apiModule";

export const drugSlice = createSlice({
  name: "drugs",
  initialState: { value: [], loading: true, activeDrug: null },

  reducers: {
    addDrug: (state, action) => {
      state.value.push(action.payload);
    },

    deleteDrug: (state) => {
      state.value = state.value.filter(
        (drug) => drug.id !== state.activeDrug?.id
      );
    },

    updateDrug: (state, action) => {
      state.value.forEach((drug) => {
        if (drug.id === state.activeDrug?.id) {
          drug.name = action.payload.name;
          drug.prices = action.payload.changed
            ? [
                ...drug.prices,
                {
                  id: drug.prices.length + 1,
                  price: parseInt(action.payload.price),
                  date: new Date().toLocaleDateString(),
                },
              ]
            : drug.prices;
        }
      });
    },

    setInitialState: (state, action) => {
      state.value = action.payload;
      state.loading = false;
    },
    setActiveDrug: (state, action) => {
      state.activeDrug = action.payload;
    },

    getFromCache: (state, action) => {
      state.value = JSON.parse(action.payload.value);
      console.log("action", action);
    },
  },
});

export const fetchDrugs = () => (dispatch) => {
  ApiModule.getDrugs().then((data) => {
    dispatch(setInitialState(data.products));
  });
};

export const getDrug = (state) => state.drugs.activeDrug;

export default drugSlice.reducer;
export const {
  addDrug,
  deleteDrug,
  updateDrug,
  setInitialState,
  setActiveDrug,
  getFromCache,
} = drugSlice.actions;
