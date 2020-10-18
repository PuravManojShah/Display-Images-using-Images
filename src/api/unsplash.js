import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID b9Vw_-i9bUraGbFzEPcUZLMywwktxvgxP9lGdemLFNY"
    }
});