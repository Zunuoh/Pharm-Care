import { createSlice } from "@reduxjs/toolkit";
import { ApiModule } from "../api/apiModule";

export const drugSlice = createSlice({
  name: "drugs",
  initialState: { value: [], loading: true, activeDrug: null },

  reducers: {
    addDrug: (state, action) => {
      state.value.push(action.payload);
    },

    deleteDrug: (state, action) => {
      state.value = state.value.filter((drug) => drug.id !== state.activeDrug?.id);
    },

    updateDrug: (state, action) => {
      state.value.forEach((drug) => {
        if (drug.id === state.activeDrug?.id) {
       /**  
        * @todo 
        return {
            name: action.payload.name,
            prices: action.payload.changed
              ? drug.prices
              : [
                ...drug.prices,
                {
                  id: Date.now(),
                  price: action.payload.price,
                  date: new Date(action.payload.date).toLocaleDateString(),
                },
              ]
          }; 
          **/
          drug.name = action.payload.name
          drug.price = action.payload.changed   ? drug.prices
             : [
                ...drug.prices,
                {
                  id: Date.now(),
                  price: action.payload.price,
                  date: new Date(action.payload.date).toLocaleDateString(),
                },
              ]
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
} = drugSlice.actions;
