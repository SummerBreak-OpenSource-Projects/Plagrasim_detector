import axios, { AxiosResponse } from 'axios';

class ApiServices {
    /**
     * Makes a GET request using Axios.
     * @param url - The URL to make the GET request to.
     * @param params - Optional query parameters for the GET request.
     * @returns A Promise with the Axios response.
     */
    public async getRequest<T>(url: string, params?: object): Promise<AxiosResponse<T>> {
        try {
            const response = await axios.get<T>(url, { params });
            return response;
        } catch (error) {
            // Handle error (log, rethrow, etc.)
            throw error;
        }
    }
}

export default ApiServices;
