import { getCustomersCreator } from "./StoreReduser/CustomerReduser";

const getUsers = () =>{
    return (dispatch)=>{
        return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch(getCustomersCreator(json)))
    }
};

export default getUsers;