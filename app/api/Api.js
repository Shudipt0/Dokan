import axios from "axios";


const api = axios.create({
    // baseURL
    baseURL: 'https://dummyjson.com',
});

// get all posts

export const fetchAllProducts = async () => {
    const res = await api.get(`/products`)
    return res.data.products;
}