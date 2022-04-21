import {createSlice} from '@reduxjs/toolkit'
import { ApiModule } from '../api/apiModule';

export const drugSlice = createSlice({
    name:"drugs",
    initialState: {value: [], loading:true},

    reducers:{
        addDrug: (state, action) => {
            state.value.push(action.payload);
        },

        deleteDrug: (state, action) => {
            state.value = state.value.filter((drug) => (drug.id !== action.payload.id))
        }, 
    
        updateDrug: (state, action) => {
            state.value.map((drug) => {
                if (drug.id === action.payload.id){
                    drug.name = action.payload.name;
                    drug.prices = action.payload.changed ? [...drug.prices,{id: Date.now(),price:action.payload.price, date:new Date(action.payload.date).toLocaleDateString()}] : drug.prices;
                }
            })
        },
    
        setInitialState:(state, action) => {
            console.log("action", action.payload)
            state.value = action.payload;
            state.loading = false
        }
    },

})


export const fetchDrugs = () => dispatch => {
    
        ApiModule.getDrugs().then((data) => {
         
          
          dispatch(
            setInitialState(data.products)
          )
        });
      
}

export const getDrug = (state, id) =>{
    return state.value?.find(el => el.id == id)
}
export default drugSlice.reducer;
export const {addDrug, deleteDrug, updateDrug, setInitialState} = drugSlice.actions;
