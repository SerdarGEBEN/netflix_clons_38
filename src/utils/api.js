import axios from "axios";

export default axios.create({
    baseURL:"https://api.themoviedb.org/3",

//* Yapacağımız isteklere eklenilecek olan header lar

headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },

  //* Butun api isteklerinde gönderilecek olan parametre

  params: {language: "tr-TR"},


});