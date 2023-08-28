import axios from 'axios';
import { base_url, config ,auth_url } from '../../utils/axiosConfig';
const register = async (userData) => {
    console.log(userData,"👍");
    const response = await axios.post(`${auth_url}register`, userData);
    if (response.data) {

        return response.data;
    }
}

const login = async (userData) => {
    const response = await axios.post(`${auth_url}login`, userData,config);
    if (response.data) {
            localStorage.setItem("customer",JSON.stringify(response.data));
            return response.data;
        
    }
};



export const authService = {
    register,
    login,
    
}