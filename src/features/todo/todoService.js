import axios from 'axios';
import { todo_url, config, } from '../../utils/axiosConfig';


const getTodos = async () => {
    const response = await axios.get(`${todo_url}`);
    if (response.data) {
        return response.data;
    }
}


const editTodos = async (yourData) => {
    const {prodId,todoData} =yourData;
    const response =await axios.patch(`${todo_url}updateUser/${prodId}`,todoData);
    console.log(response.data);
    if (response.data) {
        return response.data;
    }

}

const deleteTodo = async (todoId) => {
    const response =await axios.delete(`${todo_url}deleteUser/${todoId}`);
    if (response.data) {
        return response.data;
    }

}

const singleTodo = async (todoId) => {
    const response =await axios.get(`${todo_url}find/${todoId}`);
    if (response.data) {
        return response.data;
    }

}

const addTodos =async (todoData)=>{
    const response =await axios.post(`${todo_url}`,todoData,config);
    if (response.data) {
        return response.data;
    }

}

export const todoService = {
getTodos,
editTodos,
deleteTodo,
addTodos,
singleTodo
    
}