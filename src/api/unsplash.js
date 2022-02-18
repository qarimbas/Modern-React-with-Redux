import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ObO4Og1oimmTg_DR3Wx_sGQOdw724CqSuFmcOCu7tz0'
    }
});