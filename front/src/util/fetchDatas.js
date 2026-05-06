/* GET 방식으로 데이터 fetch */

export const getFetchData = async (path) => {
    const baseUrl = "http://localhost:9000/api";
    const url = `${baseUrl}/${path}`
    const response = await fetch(url);
    return await response.json();
}

/* POST 방식으로 데이터 fetch */

export const postFetchData = async (path, data) => {
    const baseUrl = "http://localhost:9000/api";
    const url = `${baseUrl}/${path}`;
    const response = await fetch(url, {
        method : "POST",
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(data)
    });
    return await response.json();
}