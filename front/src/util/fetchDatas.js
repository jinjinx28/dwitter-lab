/* GET 방식으로 데이터 fetch */

export const getFetchData = (path, port) => {
    const baseUrl = "http://localhost:9000/api/post";
    const url = `${baseUrl}/${path}`
    const response = await fetch(url);
    return await response.json();
}

/* POST 방식으로 데이터 fetch */

export const postFetchData = () => {

}