import { AxiosInstance } from "../config/axios-config"

class LibroService {

    get() {
        return AxiosInstance.get("libro");
    }

    delete(id) {
        return AxiosInstance.delete(`libro/delete/${id}`);
    }

}

export default new LibroService();