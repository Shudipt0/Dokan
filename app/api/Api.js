import axios from "axios";


const api = axios.create({
    // baseURL
    baseURL: 'https://dummyjson.com',
});

// get all product

export const fetchAllProducts = async () => {
    const res = await api.get(`/products`)
    return res.data.products;
};

// get single product
export const fetchProduct = async (id) => {
    const res = await api.get(`/products/${id}`);
    return res?.data;
};

// get all category

export const fetchAllCategory = async () => {
    const res = await api.get('/products/categories');
    return res.data;
}

// get single category

export const fetchCategoryItem = async (slug) => {
    const res = await api.get(`/products/category/${slug}`);
    return res.data;
}