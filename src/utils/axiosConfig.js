// export const base_url ="http://localhost:5000/api";
export const base_url ="http://localhost:5000/api/todo/";
export const todo_url ="https://todolist-api-6olz.onrender.com/api/todo/";
export const auth_url ="https://todolist-api-6olz.onrender.com/api/user/";
const getTokenFromLocalStorage =localStorage.getItem('customer')
? JSON.parse(localStorage.getItem("customer")):null;


export const config ={
    headers:{
        Authorization: `Bearer ${
            getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : " "
        }` ,
        Accept:"application/json",
    },
};