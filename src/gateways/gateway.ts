import Feature from "@/entitles/feature";
import axios from "axios";

export const getFeatures = ():Promise<Feature[]> => {
  return axios.get(`${process.env.API_URL}`).then((response) => response.data);
  
};
