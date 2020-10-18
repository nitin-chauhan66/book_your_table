const axios = require("axios");
const axiosInstance = axios.create({
  baseURL: "https://algoseedlabs.com/modesgitane/api"
});
export default axiosInstance;