
import axios from "axios";

export default axios.create({

  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a968757dbb4940d7a15b8f7983a0381d",
  },
});
