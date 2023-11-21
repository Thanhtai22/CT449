import createApiClient from "./api.service";

class AdminService {
    constructor(baseURL = "/api"){
        this.api = createApiClient(baseURL);
    }
    async getOrders(){
        return (await this.api.get("/orders")).data;
    }
}
export default new AdminService();