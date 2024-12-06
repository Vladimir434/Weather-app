import axios from "axios";

export const instanse = axios.create({
  baseURL:'https://api.openweathermap.org/data/2.5/'
})