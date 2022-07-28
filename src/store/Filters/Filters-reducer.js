import { ADD_FILTER, CLEAR_FILTER, DELETE_FILTER } from "./Filters-action";


export const filtersReducer = (state={filter:[]}, action)=>{
   switch (action.type) { 
      case ADD_FILTER:{
         return {
          ...state,
          filter:  [...state.filter, action.filter],
         }
      }
      case DELETE_FILTER:{
         return {
          ...state,
          filter: state.filter.filter(item=>{
            return item !== action.filter
          }),
         }
      }
      case CLEAR_FILTER:{
         return {
          ...state,
          filter: [],
         }
      }
   
      default: {
           return state;
         }
    }
}