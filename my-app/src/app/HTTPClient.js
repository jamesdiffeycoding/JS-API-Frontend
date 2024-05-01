import axios from "axios";

export default class HTTPClient {
  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:3000",
    });
  }

  async get(path) {
    if (!path) {
      throw new Error("Path is required");
    }
    try {
      const response = await this.client.get(path);
      return response.data;
    } catch (err) {
      console.log(err);
      if (err.response && err.response.status === 404) {
        return "404 error";
    
      }
        return "500 error";
    }
  }

  async getbyID(path, id) {
    if (!path) {
      throw new Error("Path is required");
    }
    if (!id) {
      throw new Error("ID is required");
    }
    try {
      const response = await this.client.get(`${path}/${id}`);
      return response.data;
    } catch (err) {                                                                                         
      console.log(err);
      if (err.response && err.response.status === 404) {
        return "404 error";
      }
      return "500 error";
    }
  }


  async patch(path, data, id) {
      try {
          const response = await this.client.patch(path, data, id);
          return response.data;
        } catch (err) {
            console.error(`An error occurred while making a PATCH request to ${path}:`, err);
            throw err; 
        }
    }

    async delete(path, id) {        
        try {
            const response = await this.client.delete(`${path}/${id}`);
            return response.data;
        } catch (err) {
            console.error(`An error occurred while making a DELETE request to ${path}:`, err);
            throw err; 
        }
    }

    async post(path, data) {
      try {
        const response = await this.client.post(path, data);
        return response.data;
      } catch (err) {
        console.error(`An error occurred while making a POST request to ${path}:`, err);
        throw err; 
      }
    }
}
