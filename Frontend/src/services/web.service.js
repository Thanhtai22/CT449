import createApiClient from "./api.service";

class WebService {
    constructor(baseURL = "/api"){
        this.api = createApiClient(baseURL);
    }
    async getProduct(){
        return (await this.api.get("/")).data;
    }
    async getCart(email){
        return (await this.api.get(`/cart?email=${email}`)).data;
    }
    async getAcountUser(){
        return (await this.api.get("/user")).data;
    }
    async getOrdered(email){
        return (await this.api.get(`/ordered?email=${email}`)).data;
    }
    async getProductId(id) {
        return (await this.api.get(`/product?id=${id}`)).data;
    }
    
}
export default new WebService();