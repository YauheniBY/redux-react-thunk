import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCashCreator, reduceCashCreator } from "./store/StoreReduser/CashReduser";
import { addCuctomersCreator, removeCuctomersCreator } from "./store/StoreReduser/CustomerReduser";
import "./App.css";
import getUsers from "./store/getUsers";


function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  const addCash = (cash) => {
    dispatch(addCashCreator(cash))
  }

  const reduceCash = (cash) => {
    dispatch(reduceCashCreator(cash))
  }

  const addCustomer = (name) => {
    const customer = 
    {
      name: name,
      id: Date.now()  
    }
    dispatch(addCuctomersCreator(customer))
  }

  const removeCustomer = (customer) => {   
    dispatch(removeCuctomersCreator(customer))
  }

  const getCustomers = () => {
    dispatch(getUsers())
  }

  return (
    <div className="App">
      <h1>Redux + React + Thunk</h1>

      <div className="score">{cash}</div>
      <button onClick={() => {addCash(Number(prompt()))}}>Add cash(+)</button>
      <button onClick={() => {reduceCash(Number(prompt()))}}>Reduce cash(-)</button> 

      <div className="customers">
      <button onClick={() => {addCustomer(prompt())}}>Add customer</button>
      <button onClick={getCustomers}>Get customers from remote base</button>
      { (customers.length > 0)
      ?
      <div className="customersList">
        <div>*Click to delete Customer</div>

        {customers.map(customer => 
                <div 
                onClick={() => {removeCustomer(customer.id)}
                } 
                className='customer'
                key={customer.id}> 
                  {customer.name}
                </div>)
        }
        
    </div>
      
      : <div>Нет пользователей</div>

      }
    </div>
    

    </div>
  );
}

export default App;
