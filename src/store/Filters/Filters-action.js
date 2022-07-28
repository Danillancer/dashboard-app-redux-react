export const ADD_FILTER = "ADD_FILTER"
export const DELETE_FILTER= "DELETE_FILTER"
export const CLEAR_FILTER= "CLEAR_FILTER"

export const addFilter = (filter)=>({
   type: ADD_FILTER,
   filter:filter
})
export const deleteFilter = (filter)=>({
   type: DELETE_FILTER,
   filter:filter
})
export const clearFilter = ()=>({
   type: CLEAR_FILTER,
})

