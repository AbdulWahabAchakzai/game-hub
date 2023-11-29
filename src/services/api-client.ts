import axios, { AxiosRequestConfig } from "axios";
const RAWGapiKey = import.meta.env.VITE_RAWG_API_KEY;

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: RAWGapiKey,
  },
});

class APICient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endPoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APICient;
