import axios from "axios";

const baseUrl = "https://api.escuelajs.co/api/v1";

export const getAllProducts = async () => {
    const url = `${baseUrl}/products`;
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (err) {
        return err;
    }
}

export const getCategories = async () => {
    const url = `${baseUrl}/categories`;
    try {
        const { data } = await axios.get(url);
        console.log(data);
        return data;
    } catch (err) {
        return err;
    }    
}