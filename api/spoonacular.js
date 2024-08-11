import axios from 'axios';
import { apiKey } from '../src/constants';


// Endpoints

const apiBaseUrl = 'https://api.spoonacular.com';
const randomRecipesEndpoint = `${apiBaseUrl}/recipes/random?number=3&apiKey=${apiKey}`;
const latestRecipesEndpoint = `${apiBaseUrl}/recipes/complexSearch?sort=popularity&number=10&apiKey=${apiKey}`;

const apiCall = async (endpoint, params)=>{
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    }

    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error: ',error);
        return {}
    }

}

export const fetchRandomRecipes = ()=> {
    return apiCall(randomRecipesEndpoint);
}

export const fetchLatestRecipes = ()=> {
    return apiCall(latestRecipesEndpoint);
}