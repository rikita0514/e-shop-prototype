const BASE_URL = "http://localhost3001";

export const fetcher = async (url) => {
    let responseObject = { errorMessage: '', data: [] };

    try{
    const Response = await fetch(BASE_URL + url)
    const responseData = await Response.json();
    responseObject.errorMessage = '';
    responseObject.data = responseData;
    }
    catch (err) {
        responseObject.errorMessage = err.message;
    }
    return responseObject;
};