const { default: axios } = require("axios");



export const BASE_URL = "https://majorproject-1-m768.onrender.com/"

export const clientServer = axios.create({
    baseURL: BASE_URL,
})      