const BASE_URL = "http://localhost:3001";

export const fetcher = async (url) => {
    const Response = await fetch(BASE_URL + url);
    const ResponseData = await Response.json();
    return ResponseData;
    
};
