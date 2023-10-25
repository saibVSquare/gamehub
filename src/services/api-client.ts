import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "9b95d1687fc5431db1b4e2bce9744319",
    },
});
