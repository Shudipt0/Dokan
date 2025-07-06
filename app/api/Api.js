import axios from "axios";


const api = axios.create({
    // baseURL
    baseURL: 'https://dummyjson.com',
});

// get all product for pagination

export const fetchAllProducts = async (pageNumber) => {

    const limit = 12;
    const skip = (pageNumber - 1) * limit
    const res = await api.get(`/products?limit=${limit}&skip=${skip}`)
    const {products, total} = res.data;
    
    
    return {products, totalPages: Math.ceil(total/limit)};
};

// get all product for Search

export const fetchSearchProducts = async (query) => {

 const res = await api.get(`/products/search?q=${query}`);
    return res?.data?.products;
};

// get single product
export const fetchProduct = async (id) => {
    const res = await api.get(`/products/${id}`);
    return res?.data;
};

// get all category name

export const fetchAllCategory = async () => {
    const res = await api.get('/products/categories');
    return res.data;
}

// get items by category

export const fetchCategoryItem = async (slug) => {
    const res = await api.get(`/products/category/${slug}`);
    return res.data;
};




