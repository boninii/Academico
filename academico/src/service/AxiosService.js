import axios, { AxiosError } from 'axios'
import { useState } from 'react'

const http = axios.create ({
    baseUrl: 'http:localhost:8080/rest' // v1
})

const useApi = () => {
    const [data, setData] = useState([]);
    const [errorAxios, setErrorAxios] = useState([]);

    const getData = async (url) => {
        try {
            const response = await http.get(url);
            setData(response.data);
            setErrorAxios(null);
        }
        catch(error) {
            setErrorAxios(error);
            setData(null);
        }
        finally {

        }
    }

    return {
        data,
        errorAxios,
        getData,
    }
}

export default useApi