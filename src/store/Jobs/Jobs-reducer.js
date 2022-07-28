import { ADD_POSITIONS } from "./Jobs-action";


export const JobsReducer = (state=[], action)=>{
   switch (action.type) {
      case ADD_POSITIONS:{
        return {
         ...state,
         data: [...action.positions],
        }
     }
      
        default: {
           return state;
         }
    }
}