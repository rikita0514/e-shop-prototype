const BASE_URL = "http://localhost:3001";

const fetcher = async (url) => {
    let responseObject = { errorMessage: '', data: []};

    try{
    const Response = await fetch(BASE_URL + url);
    if(!Response.ok) {
        throw new Error(`HTTP Error ${Response.status}`);
    }
    const ResponseData = await Response.json();
    responseObject.errorMessage = '';
    responseObject.data = ResponseData;

    return responseObject;
    }
    catch (err) {
        responseObject.errorMessage = err.message;
        return responseObject;
    }
    
}

export const getCategories = () => {
    return fetcher('/categories');
}

export const getProducts = id => {
    return fetcher('/products?catId=' + id);
}