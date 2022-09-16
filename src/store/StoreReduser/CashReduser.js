const defaultState = {
    cash: 0
  }
  const ADD_CASH = 'ADD_CASH';
  const REDUCE_CASH = 'REDUCE_CASH';
  
export const CashReduser = (state = defaultState, action) => {
    switch (action.type){
      case ADD_CASH :
        state = {...state, cash: state.cash + action.payload}
        break;
      case REDUCE_CASH:
        state = {...state, cash: state.cash - action.payload}
        break;
    }
    return state;
  }

  export const addCashCreator = (payload) => ( {type: ADD_CASH, payload});
  export const reduceCashCreator = (payload) => ( {type: REDUCE_CASH, payload});