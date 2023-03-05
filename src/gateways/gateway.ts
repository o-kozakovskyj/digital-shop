import Book from "@/entitles/feature";
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://62deb5ec9c47ff309e7a60a0.mockapi.io/api/v1/cards',
  // headers: {
  //   'X-RapidAPI-Key': '768a98fc0bmshd0a7bd843478f1fp1fa421jsn91a16bdade75',
  //   'X-RapidAPI-Host': 'books39.p.rapidapi.com'
  // }
};


export const getBooks = ():Promise<Book[]> => {
  return axios.request(options);
} 
