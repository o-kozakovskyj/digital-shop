import Feature from "@/entitles/feature";
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://62deb5ec9c47ff309e7a60a0.mockapi.io/api/v1/cards',
};

export const getFeatures = ():Promise<Feature[]> => {
  return axios.request(options);
} 
