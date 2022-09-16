const defaultState = {
  customers: []
}
const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const GET_CUSTOMERS = 'GET_CUSTOMERS'
    
  
 export const CustomerReduser = (state = defaultState, action) => {
    switch (action.type){
      case ADD_CUSTOMER :
        state = {...state, customers: [...state.customers, action.payload]}
        break;
      case REMOVE_CUSTOMER:
        state = {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        break;
        case GET_CUSTOMERS:
        state = {...state, customers: [...state.customers, ...action.payload]}
        break;
    }
    return state;
  }
  export const addCuctomersCreator = (payload) => ({type: ADD_CUSTOMER, payload});
  export const removeCuctomersCreator = (payload) => ({type: REMOVE_CUSTOMER, payload});
  export const getCustomersCreator = (payload) => ({type: GET_CUSTOMERS, payload});